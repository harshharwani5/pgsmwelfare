import json
import os
import re

transcript_path = r"C:\Users\harsh\.gemini\antigravity\brain\6f697d14-486b-439c-bc76-659229d4045e\.system_generated\logs\transcript.jsonl"
output_dir = r"C:\Users\harsh\OneDrive\Desktop\Bhopal Property Solutions"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

files = {}
# to map absolute paths from transcript to our new relative paths
def get_rel_path(abs_path):
    if not abs_path: return None
    abs_path = abs_path.replace("\\", "/").lower()
    if "new folder" in abs_path:
        return abs_path.split("new folder/")[-1]
    return None

def strip_line_numbers(content):
    # '1: import React...' -> 'import React...'
    lines = content.split('\n')
    cleaned = []
    for line in lines:
        if re.match(r'^\d+: ', line):
            cleaned.append(line.split(' ', 1)[1])
        else:
            cleaned.append(line)
    return '\n'.join(cleaned)

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        if not line.strip(): continue
        try:
            step = json.loads(line)
        except:
            continue
            
        # Parse VIEW_FILE responses
        if step.get("type") == "VIEW_FILE" and step.get("status") == "DONE":
            content = step.get("content", "")
            # extract file path
            m = re.search(r'File Path: `file:///(.*?)`', content)
            if m:
                path = m.group(1).replace("%20", " ")
                rel_path = get_rel_path(path)
                if rel_path:
                    # extract content after 'The following code has been modified...'
                    split_marker = '<original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.\n'
                    if split_marker in content:
                        actual_content = content.split(split_marker)[1]
                        # Remove the ending note
                        end_marker1 = '\nThe above content shows the entire, complete file contents'
                        end_marker2 = '\nThe above content does NOT show the entire file contents'
                        if end_marker1 in actual_content:
                            actual_content = actual_content.split(end_marker1)[0]
                        if end_marker2 in actual_content:
                            actual_content = actual_content.split(end_marker2)[0]
                        files[rel_path] = strip_line_numbers(actual_content)
                    
        # Parse Tool Calls
        if "tool_calls" in step:
            for call in step["tool_calls"]:
                name = call.get("name")
                args = call.get("args", {})
                if name == "write_to_file":
                    rel = get_rel_path(args.get("TargetFile", ""))
                    if rel:
                        files[rel] = args.get("CodeContent", "")
                elif name == "replace_file_content":
                    rel = get_rel_path(args.get("TargetFile", ""))
                    if rel and rel in files:
                        tc = args.get("TargetContent", "")
                        rc = args.get("ReplacementContent", "")
                        files[rel] = files[rel].replace(tc, rc)
                elif name == "multi_replace_file_content":
                    rel = get_rel_path(args.get("TargetFile", ""))
                    if rel and rel in files:
                        chunks = args.get("ReplacementChunks", [])
                        if isinstance(chunks, str):
                            try:
                                chunks = json.loads(chunks)
                            except:
                                chunks = []
                        for chunk in chunks:
                            tc = chunk.get("TargetContent", "")
                            rc = chunk.get("ReplacementContent", "")
                            files[rel] = files[rel].replace(tc, rc)

# Also grab package.json, tailwind.config.js etc from Velora if they weren't in transcript
# We will just write whatever we captured.
print(f"Captured {len(files)} files.")
for rel_path, content in files.items():
    out_path = os.path.join(output_dir, rel_path)
    out_dir = os.path.dirname(out_path)
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
    with open(out_path, 'w', encoding='utf-8') as out_f:
        out_f.write(content)
    print(f"Restored: {rel_path}")

