import os

js_path = 'c:/Users/talma/Downloads/tal-portfolio-figma-prototype/tal_portfolio_figma_embed/js/main.js'
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

custom_js = """
  // Interactive Cursor & Parallax
  const cursor = document.querySelector('.custom-cursor');
  const hero = document.querySelector('.hero');
  const interactiveElements = document.querySelectorAll('a, button');

  if (cursor && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('mousemove', (e) => {
      // Update cursor position
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Update hero parallax variables if hero is present
      if (hero) {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        hero.style.setProperty('--mouse-x', x);
        hero.style.setProperty('--mouse-y', y);
      }
    });

    // Add hovering effect on interactive elements
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hovering');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hovering');
      });
    });
  }
"""

# Insert right before the last '}());'
insert_idx = js_content.rfind('}());')
if insert_idx != -1:
    new_js_content = js_content[:insert_idx] + custom_js + '\n' + js_content[insert_idx:]
    with open(js_path, 'w', encoding='utf-8') as f:
        f.write(new_js_content)
    print("main.js updated!")
else:
    print("Could not find closing IIFE in main.js")

