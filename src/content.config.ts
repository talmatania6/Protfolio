import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * All site copy lives in markdown frontmatter so it can be edited without
 * touching markup. Bodies are intentionally unused — prose that needs bespoke
 * markup stays in the corresponding .astro page.
 *
 * Any field commented "inline HTML" is rendered with `set:html` in the page,
 * so <strong>, <em>, <br>, and entities work inside it.
 *
 *   site → src/content/global/site.md   getEntry('site', 'site')
 *   home → src/content/global/home.md   getEntry('home', 'home')
 *   cases → src/content/cases/<slug>.md getEntry('cases', slug)
 */

/** An emoji-led card, shared by the at-a-glance, pillars, and impact grids. */
const iconCard = z.object({
  icon: z.string(),
  title: z.string(),
  /** inline HTML */
  body: z.string(),
});

const link = z.object({
  href: z.string(),
  label: z.string(),
});

/** A `.tag-pill-sm`; `highlight: true` adds the orange variant. */
const tag = z.object({
  label: z.string(),
  highlight: z.boolean().optional(),
});

const sectionHeading = z.object({
  eyebrow: z.string(),
  heading: z.string(),
  hook: z.string(),
});

const site = defineCollection({
  loader: glob({ base: './src/content/global', pattern: 'site.md' }),
  schema: z.object({
    author: z.string(),
    email: z.string(),
    linkedin: z.string(),
    behance: z.string().optional(),
    cv: z.string(),
    themeColor: z.string(),
    brand: z.object({ first: z.string(), second: z.string() }),
    nav: z.array(
      link.extend({
        /** True for links to a homepage section — becomes /#anchor on case pages. */
        home: z.boolean().optional(),
        download: z.boolean().optional(),
        suffix: z.string().optional(),
      }),
    ),
    footer: z.object({
      /** inline HTML */
      callout: z.string(),
      /** inline HTML */
      copyright: z.string(),
    }),
  }),
});

const home = defineCollection({
  loader: glob({ base: './src/content/global', pattern: 'home.md' }),
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
      ogTitle: z.string(),
      ogDescription: z.string(),
      ogImage: z.string(),
    }),
    hero: z.object({
      badge: z.string(),
      /** inline HTML — wraps the name in .marker-underline */
      heading: z.string(),
      /** inline HTML — .highlight-orange spans */
      role: z.string(),
      /** inline HTML */
      valueProp: z.string(),
      actions: z.array(
        link.extend({
          style: z.enum(['primary', 'ghost']),
          suffix: z.string(),
          download: z.boolean().optional(),
        }),
      ),
    }),
    projects: sectionHeading.extend({
      items: z.array(
        z.object({
          href: z.string(),
          ariaLabel: z.string(),
          delay: z.number(),
          /** Two stops for the preview frame's 135deg gradient. Quote hex values in YAML. */
          gradient: z.tuple([z.string(), z.string()]),
          badge: z.string(),
          cornerEmoji: z.string(),
          emojiRow: z.string(),
          previewTitle: z.string(),
          previewBlurb: z.string(),
          previewImage: z.string().optional(),
          footerLeft: z.string(),
          footerRight: z.string(),
          tags: z.array(tag),
          title: z.string(),
          /** inline HTML */
          description: z.string(),
        }),
      ),
    }),
    philosophy: sectionHeading.extend({ pillars: z.array(iconCard) }),
    process: sectionHeading.extend({
      stages: z.array(
        z.object({
          number: z.string(),
          title: z.string(),
          /** inline HTML */
          body: z.string(),
        }),
      ),
    }),
    about: sectionHeading.extend({
      greeting: z.string(),
      body: z.string(),
      offScreen: z.string(),
      image: z.string(),
    }),
    toolkit: sectionHeading.extend({
      groups: z.array(
        z.object({
          icon: z.string(),
          title: z.string(),
          tools: z.array(z.string()),
        }),
      ),
    }),
    cvBanner: z.object({
      heading: z.string(),
      body: z.string(),
      buttonLabel: z.string(),
    }),
  }),
});

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '*.md' }),
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
      ogTitle: z.string(),
      ogDescription: z.string(),
      ogImage: z.string(),
    }),
    breadcrumb: z.string(),
    tags: z.array(tag),
    hero: z.object({
      title: z.string(),
      tagline: z.string(),
      /** inline HTML */
      valueProp: z.string(),
    }),
    // The showcase media frame is deliberately NOT here: each case's frame
    // differs structurally (static badge + chips vs. a live deep-link + CTA
    // button), so it stays as verbatim markup in the page.
    subnav: z.array(link),
    glance: z.array(iconCard),
    impact: sectionHeading.extend({ cards: z.array(iconCard) }).optional(),
    nextCase: link.optional(),
    
    problem: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      context: z.string(),
      body: z.string(),
    }).optional(),

    evidence: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      intro: z.string(),
      stats: z.array(z.object({
        value: z.string(),
        description: z.string(),
      })),
      supportingText: z.string().optional(),
      takeaway: z.string().optional(),
      sources: z.array(z.string()).optional(),
    }).optional(),

    challenge: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      takeaway: z.string(),
      problems: z.array(z.string()).optional(),
    }).optional(),

    learningSolution: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      context: z.string(),
      body: z.string(),
    }).optional(),

    contentStrategy: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      architecture: z.string(),
      decisions: z.array(z.object({
        title: z.string(),
        body: z.string(),
      })),
    }).optional(),

    experience: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string().optional(),
      flow: z.string().optional(),
      interactiveVideo: z.object({ heading: z.string(), body: z.string() }),
      learnPractice: z.object({ heading: z.string(), body: z.string() }),
      knowledgeCheck: z.object({ heading: z.string(), body: z.string() }),
      prioritization: z.object({ heading: z.string(), body: z.string() }),
      progression: z.object({ heading: z.string(), body: z.string() }),
    }).optional(),
    
    justInTime: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      followUp: z.string().optional(),
    }).optional(),

    inUseToday: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      highlight: z.string(),
      microcopy: z.string(),
      feedbackTitle: z.string(),
      testimonials: z.array(z.object({
        author: z.string(),
        quote: z.string()
      })),
    }).optional(),

    assessment: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      techOutput: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { site, home, cases };
