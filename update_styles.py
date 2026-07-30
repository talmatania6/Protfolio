import os

file_path = 'c:/Users/talma/Downloads/tal-portfolio-figma-prototype/tal_portfolio_figma_embed/css/styles.css'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

custom_styles = """
/* Custom Cursor & Parallax */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--orange);
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease;
  mix-blend-mode: difference;
}

.custom-cursor.is-hovering {
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
}

@media (pointer: fine) {
  body {
    cursor: none;
  }
  a, button {
    cursor: none;
  }
}

.hero {
  --mouse-x: 0;
  --mouse-y: 0;
}

.hero::before {
  transform: translate(calc(var(--mouse-x) * 30px), calc(var(--mouse-y) * 30px));
  transition: transform 0.1s ease-out;
}

.hero::after {
  transform: translate(calc(var(--mouse-x) * -40px), calc(var(--mouse-y) * -40px));
  transition: transform 0.1s ease-out;
}
"""

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content + '\n' + custom_styles)

html_path = 'c:/Users/talma/Downloads/tal-portfolio-figma-prototype/tal_portfolio_figma_embed/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

html_content = html_content.replace('</body>', '  <div class="custom-cursor"></div>\n</body>')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print("Styles and HTML updated!")
