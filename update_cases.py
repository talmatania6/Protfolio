import os

cases_dir = 'c:/Users/talma/Downloads/tal-portfolio-figma-prototype/tal_portfolio_figma_embed/cases'
files = ['golden-time.html', 'video-editing.html']

for file in files:
    file_path = os.path.join(cases_dir, file)
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already added
    if '<div class="custom-cursor"></div>' not in content:
        # replace the script tag inclusion
        content = content.replace('<script src="../js/main.js"></script>', '<div class="custom-cursor"></div>\n  <script src="../js/main.js"></script>')
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

print('Updated case study files!')
