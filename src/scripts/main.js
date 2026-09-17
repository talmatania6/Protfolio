(function () {
  document.documentElement.classList.add('js');

  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  function updateHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      menu.classList.toggle('is-open', !isOpen);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
  }

  const revealItems = document.querySelectorAll('.reveal:not(.hero-title)');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  // Navigation Active State Spy (Home Nav & Case Subnav)
  const navTrackers = ['.nav-links a[href^="#"]', '.case-subnav-list a[href^="#"]'];
  let isNavClickScrolling = false;
  let scrollTimeout;

  navTrackers.forEach((selector) => {
    const links = Array.from(document.querySelectorAll(selector));
    const sections = links
      .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
      .filter((item) => item.section);

    // Add click handler to override observer during smooth scroll
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          isNavClickScrolling = true;
          
          // Instantly highlight clicked link
          links.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');

          // Reset the flag after scroll completes (fallback timeout)
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isNavClickScrolling = false;
          }, 1000);
        }
      });
    });

    if (sections.length && 'IntersectionObserver' in window) {
      const intersectingRatios = new Map();

      const sectionObserver = new IntersectionObserver((entries) => {
        if (isNavClickScrolling) return;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingRatios.set(entry.target, entry.intersectionRatio);
          } else {
            intersectingRatios.delete(entry.target);
          }
        });

        links.forEach((link) => link.classList.remove('is-active'));

        if (intersectingRatios.size > 0) {
          let maxRatio = -1;
          let mostVisibleSection = null;

          intersectingRatios.forEach((ratio, section) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              mostVisibleSection = section;
            }
          });

          const current = sections.find((item) => item.section === mostVisibleSection);
          if (current) current.link.classList.add('is-active');
        }
      }, { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-100px 0px -40% 0px' });

      sections.forEach((item) => sectionObserver.observe(item.section));
    }
  });

  // Global Cursor Spotlight Tracking Glow
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      let glow = document.querySelector('.cursor-glow');
      if (!glow) {
        glow = document.createElement('div');
        glow.className = 'cursor-glow';
        glow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(glow);
      }

      let isMoving = false;
      let baseOpacity = 1;

      const updateOpacity = () => {
        const heroHeight = heroSection.offsetHeight || window.innerHeight;
        const scrollY = window.scrollY;
        // Fade out completely when scrolled past the hero section
        baseOpacity = Math.max(0, 1 - (scrollY / heroHeight));
        glow.style.setProperty('--glow-opacity', baseOpacity.toString());
      };

      window.addEventListener('scroll', updateOpacity, { passive: true });
      updateOpacity();

      window.addEventListener('mousemove', (e) => {
        if (!isMoving) {
          window.requestAnimationFrame(() => {
            glow.style.setProperty('--mouse-x', `${e.clientX}px`);
            glow.style.setProperty('--mouse-y', `${e.clientY}px`);
            glow.style.setProperty('--glow-opacity', baseOpacity.toString());
            isMoving = false;
          });
          isMoving = true;
        }
      }, { passive: true });

      document.documentElement.addEventListener('mouseleave', () => {
        glow.style.setProperty('--glow-opacity', '0');
      });

      window.addEventListener('blur', () => {
        glow.style.setProperty('--glow-opacity', '0');
      });
    }
  }

  // Back to Top functionality
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Accordion Progressive Disclosure (Single-open behavior)
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems.length) {
    accordionItems.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          accordionItems.forEach((other) => {
            if (other !== item && other.open) {
              other.open = false;
            }
          });
        }
      });
    });
  }

}());
