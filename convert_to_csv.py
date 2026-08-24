import csv
import re
import os

def parse_persona_file(filepath):
    """Parse a markdown persona file and extract structured data."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split by persona sections
    persona_blocks = re.split(r'---\s*\n### PERSONA \d+:', content)
    persona_blocks = [b.strip() for b in persona_blocks if b.strip()]
    
    personas = []
    
    for block in persona_blocks:
        persona = {}
        
        # Extract persona name from first line
        first_line = block.split('\n')[0].strip()
        persona['name'] = first_line
        
        # Extract Gender
        gender_match = re.search(r'\*\*Gender:\*\*\s*(.+)', block)
        persona['gender'] = gender_match.group(1).strip() if gender_match else ''
        
        # Extract Age Group
        age_match = re.search(r'\*\*Age Group:\*\*\s*(.+)', block)
        persona['age_group'] = age_match.group(1).strip() if age_match else ''
        
        # Extract numbered lists
        def extract_list(header_pattern):
            match = re.search(header_pattern + r'\s*\n((?:\d+\..+\n?)+)', block)
            if match:
                items = re.findall(r'\d+\.\s*(.+)', match.group(1))
                return '\n'.join([f"{i+1}. {item.strip()}" for i, item in enumerate(items)])
            return ''
        
        persona['desires'] = extract_list(r'\*\*Desires \(10\):\*\*')
        persona['needs'] = extract_list(r'\*\*Needs \(10\):\*\*')
        persona['friction'] = extract_list(r'\*\*Friction/Barriers \(10\):\*\*')
        persona['why_buy'] = extract_list(r'\*\*Why Do They Need/Buy \(10\):\*\*')
        persona['offer'] = extract_list(r'\*\*What Will We Offer \(10\):\*\*')
        persona['hooks'] = extract_list(r'\*\*Scroll-Stopper Hooks in Hindi/Hinglish \(10\):\*\*')
        persona['usps'] = extract_list(r'\*\*Top 5 USPs for This Persona \(5\):\*\*')
        
        # Extract single-line fields
        cta_match = re.search(r'\*\*CTA(?:\s*\(Call to Action\))?:?\*\*\s*["\']?(.+?)["\']?\s*$', block, re.MULTILINE)
        persona['cta'] = cta_match.group(1).strip().strip('"\'') if cta_match else ''
        
        awareness_match = re.search(r'\*\*Awareness Stage:\*\*\s*(.+)', block)
        persona['awareness'] = awareness_match.group(1).strip() if awareness_match else ''
        
        influencer_match = re.search(r'\*\*Decision Influencer:\*\*\s*(.+)', block)
        persona['influencer'] = influencer_match.group(1).strip() if influencer_match else ''
        
        visual_match = re.search(r'\*\*Visual/Creative Direction:\*\*\s*(.+)', block)
        persona['visual'] = visual_match.group(1).strip() if visual_match else ''
        
        tone_match = re.search(r'\*\*Emotional Tone:\*\*\s*(.+)', block)
        persona['tone'] = tone_match.group(1).strip() if tone_match else ''
        
        personas.append(persona)
    
    return personas

# Parse all batch files
all_personas = []
base_dir = r'C:\Users\harsh\OneDrive\Desktop\New folder'

for batch_file in ['persona_sheet_batch1.md', 'persona_sheet_batch2.md', 'persona_sheet_batch3.md']:
    filepath = os.path.join(base_dir, batch_file)
    if os.path.exists(filepath):
        parsed = parse_persona_file(filepath)
        all_personas.extend(parsed)
        print(f"Parsed {len(parsed)} personas from {batch_file}")

# Write CSV
csv_path = os.path.join(base_dir, 'Ad_Creative_Persona_Sheet.csv')

headers = [
    'Persona',
    'Gender', 
    'Age Group',
    'Desires (10)',
    'Needs (10)',
    'Friction/Barriers (10)',
    'Why Do They Need/Buy (10)',
    'What Will We Offer (10)',
    'Scroll-Stopper Hooks (10)',
    'Top 5 USPs',
    'CTA',
    'Awareness Stage',
    'Decision Influencer',
    'Visual/Creative Direction',
    'Emotional Tone'
]

with open(csv_path, 'w', newline='', encoding='utf-8-sig') as csvfile:
    writer = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
    writer.writerow(headers)
    
    for p in all_personas:
        row = [
            p['name'],
            p['gender'],
            p['age_group'],
            p['desires'],
            p['needs'],
            p['friction'],
            p['why_buy'],
            p['offer'],
            p['hooks'],
            p['usps'],
            p['cta'],
            p['awareness'],
            p['influencer'],
            p['visual'],
            p['tone']
        ]
        writer.writerow(row)

print(f"\n✅ CSV created successfully: {csv_path}")
print(f"Total personas: {len(all_personas)}")
print(f"Total columns: {len(headers)}")
print(f"\nPersonas included:")
for i, p in enumerate(all_personas, 1):
    print(f"  {i}. {p['name']}")
