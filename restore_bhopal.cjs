const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:\\Users\\harsh\\.gemini\\antigravity\\brain\\6f697d14-486b-439c-bc76-659229d4045e\\.system_generated\\logs\\transcript.jsonl';
const outputDir = 'C:\\Users\\harsh\\OneDrive\\Desktop\\Bhopal Property Solutions';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

let files = {};

function getRelPath(absPath) {
    if (!absPath) return null;
    let p = absPath.replace(/\\/g, '/').replace(/"/g, '').toLowerCase();
    if (p.includes('new folder')) {
        return p.split('new folder/').pop();
    }
    return null;
}

function stripLineNumbers(content) {
    let lines = content.split('\n');
    let cleaned = [];
    for (let line of lines) {
        if (/^\d+: /.test(line)) {
            cleaned.push(line.substring(line.indexOf(' ') + 1));
        } else {
            cleaned.push(line);
        }
    }
    return cleaned.join('\n');
}

const lines = fs.readFileSync(transcriptPath, 'utf-8').split('\n');

for (let line of lines) {
    if (!line.trim()) continue;
    let step;
    try {
        step = JSON.parse(line);
    } catch (e) { continue; }
    
    // Parse VIEW_FILE responses
    if (step.type === "VIEW_FILE" && step.status === "DONE") {
        let content = step.content || "";
        let m = content.match(/File Path: `file:\/\/\/(.*?)`/);
        if (m) {
            let p = m[1].replace(/%20/g, " ");
            let rel = getRelPath(p);
            if (rel) {
                let splitMarker = '<original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.\n';
                if (content.includes(splitMarker)) {
                    let actualContent = content.split(splitMarker)[1];
                    let end1 = '\nThe above content shows the entire, complete file contents';
                    let end2 = '\nThe above content does NOT show the entire file contents';
                    if (actualContent.includes(end1)) actualContent = actualContent.split(end1)[0];
                    if (actualContent.includes(end2)) actualContent = actualContent.split(end2)[0];
                    files[rel] = stripLineNumbers(actualContent);
                }
            }
        }
    }
    
    // Parse tool calls
    if (step.tool_calls) {
        for (let call of step.tool_calls) {
            let name = call.name;
            let args = call.args || {};
            
            if (name === "write_to_file") {
                let rel = getRelPath(args.TargetFile);
                if (rel) {
                    let content = args.CodeContent || "";
                    if (content.startsWith('"') && content.endsWith('"')) {
                        try { content = JSON.parse(content); } catch (e) {}
                    }
                    files[rel] = content;
                }
            } else if (name === "replace_file_content") {
                let rel = getRelPath(args.TargetFile);
                if (rel && files[rel]) {
                    let tc = args.TargetContent || "";
                    let rc = args.ReplacementContent || "";
                    if (tc.startsWith('"') && tc.endsWith('"')) { try { tc = JSON.parse(tc); } catch(e){} }
                    if (rc.startsWith('"') && rc.endsWith('"')) { try { rc = JSON.parse(rc); } catch(e){} }
                    files[rel] = files[rel].replace(tc, rc);
                }
            } else if (name === "multi_replace_file_content") {
                let rel = getRelPath(args.TargetFile);
                if (rel && files[rel]) {
                    let chunks = args.ReplacementChunks;
                    if (typeof chunks === 'string') {
                        try { chunks = JSON.parse(chunks); } catch (e) { chunks = []; }
                    }
                    for (let chunk of chunks) {
                        let tc = chunk.TargetContent || "";
                        let rc = chunk.ReplacementContent || "";
                        if (tc.startsWith('"') && tc.endsWith('"')) { try { tc = JSON.parse(tc); } catch(e){} }
                        if (rc.startsWith('"') && rc.endsWith('"')) { try { rc = JSON.parse(rc); } catch(e){} }
                        files[rel] = files[rel].replace(tc, rc);
                    }
                }
            }
        }
    }
}

console.log(`Captured ${Object.keys(files).length} files.`);
for (let rel in files) {
    let outPath = path.join(outputDir, rel);
    let outDir = path.dirname(outPath);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(outPath, files[rel], 'utf-8');
    console.log(`Restored: ${rel}`);
}
