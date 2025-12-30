import json
import re
import random
import ast

def convert_db_format():
    # Read the JavaScript-like file
    with open('db.json', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Convert JavaScript-like syntax to valid JSON
    # Remove trailing commas before closing braces/brackets
    content = re.sub(r',(\s*[}\]])', r'\1', content)
    
    # Add quotes around unquoted keys
    keys_to_quote = ['id', 'name', 'category', 'detailUrl', 'playUrl', 'image', 'description']
    for key in keys_to_quote:
        # Match the key followed by colon, ensuring it's a property name
        pattern = rf'\b{key}\s*:'
        replacement = f'"{key}":'
        content = re.sub(pattern, replacement, content)
    
    # Convert single quotes to double quotes for string values
    # But be careful not to break existing double-quoted strings
    # This is a simple approach - replace single quotes around values
    def fix_string_quotes(text):
        # Replace single-quoted strings with double-quoted ones
        # Match: '...' but not inside already double-quoted strings
        def replace_quotes(m):
            return '"' + m.group(1) + '"'
        # Simple replacement for single quotes in value positions
        text = re.sub(r":\s*'([^']*)'", r': "\1"', text)
        return text
    
    content = fix_string_quotes(content)
    
    # Parse as JSON
    try:
        data = json.loads(content)
    except json.JSONDecodeError as e:
        print(f"JSON parsing error at position {e.pos}: {e.msg}")
        print(f"Context: {content[max(0, e.pos-50):e.pos+50]}")
        raise
    
    # Convert to new format
    converted_data = []
    for item in data:
        # Extract image extension and convert to .jpg if needed
        image_path = item.get('image', '')
        if image_path and not image_path.startswith('./'):
            image_path = './' + image_path
        
        # Generate random downloads (between 0.1K and 100K)
        downloads_value = f"{random.uniform(0.1, 100):.1f}K"
        if downloads_value.endswith('.0K'):
            downloads_value = downloads_value.replace('.0K', 'K')
        
        new_item = {
            "id": int(item.get('id', 0)),
            "name": item.get('name', ''),
            "image": image_path,
            "description": item.get('description', ''),
            "rating": 4,  # Default rating
            "downloads": downloads_value,
            "category": item.get('category', '')
        }
        converted_data.append(new_item)
    
    # Write back as proper JSON
    with open('db.json', 'w', encoding='utf-8') as f:
        json.dump(converted_data, f, indent=2, ensure_ascii=False)
    
    print(f"Converted {len(converted_data)} items successfully!")

if __name__ == '__main__':
    convert_db_format()

