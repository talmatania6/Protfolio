---
# Homepage copy. Fields commented "inline HTML" in src/content.config.ts render
# with set:html, so <strong>/<em>/<span> and entities like &amp; work in them.
meta:
  title: Tal Matania — Instructional Designer
  description: >-
    Tal Matania is an Instructional Designer who blends pedagogical strategy with
    engaging interactive design, game mechanics, and AI-accelerated development.
  ogTitle: Tal Matania — Instructional Designer
  ogDescription: >-
    Portfolio of Tal Matania: Educational games, clinical microlearning systems,
    and AI-accelerated authoring platforms.
  ogImage: /assets/images/og-placeholder.svg

hero:
  badge: ● Open to Instructional Design &amp; Learning Tech Opportunities
  heading: <span class="handwritten-accent">Hi!</span> I’m <span class="marker-underline">Tal Matania</span>
  role: >-
    <span class="highlight-orange">Instructional Designer</span> &
    <span class="highlight-orange">Learning Technologies</span> student.
  valueProp: >-
    I turn complex content into clear, engaging learning experiences.
  actions:
    - { style: primary, href: "#projects", label: See My Work, suffix: "↓" }
    - style: ghost
      href: /assets/documents/tal-matania-cv.pdf
      label: Download CV
      suffix: "↗"
      download: true

projects:
  eyebrow: Selected Work
  heading: Featured Projects
  hook: >-
    A curated look at interactive learning games, clinical microlearning
    companions, and AI-powered educational systems.
  items:
    - href: /cases/surgical-ergonomics/
      ariaLabel: Surgical Ergonomics Case Study
      delay: 1
      gradient: ["#101c24", "#081016"]
      previewImage: /assets/projects/surgical-ergonomics/intro-ergo.png
      badge: Rambam Medical Center
      cornerEmoji: "🏥"
      emojiRow: 🩺 📱 📐
      previewTitle: Surgical Ergonomics Companion
      previewBlurb: Mobile JIT microlearning for operating room surgical teams.
      footerLeft: Just-in-Time Delivery
      footerRight: Habit Formation
      tags:
        - { label: Microlearning, highlight: true }
        - { label: Healthcare UX }
        - { label: Clinical Ergonomics }
      title: Surgical Ergonomics Companion
      description: >-
        A mobile microlearning solution designed for Rambam Health Care Campus to
        help surgeons build healthier operating-room posture habits and prevent
        musculoskeletal fatigue.

    - href: /cases/my-first-shift/
      ariaLabel: My First Shift Case Study
      delay: 2
      gradient: ["#221a15", "#140d09"]
      previewImage: /assets/images/my-first-shift-hero.png
      badge: Simulation · E-Learning
      cornerEmoji: "🍽️"
      emojiRow: 🍷 📋 ⚡
      previewTitle: My First Shift
      previewBlurb: Interactive restaurant service onboarding simulation.
      footerLeft: Storyline 360
      footerRight: Interactive Scenarios
      tags:
        - { label: Storyline 360, highlight: true }
        - { label: Interactive Scenarios }
        - { label: Staff Onboarding }
      title: "My First Shift: Service Onboarding"
      description: >-
        A realistic scenario-based onboarding experience that prepares new restaurant
        waiters to handle service situations, prioritize tasks, and build confidence
        before their first live shifts.

    - href: /cases/learning-game-generator/
      ariaLabel: Plane It Right Case Study
      delay: 1
      gradient: ["#1f1d1a", "#111110"]
      previewImage: /assets/projects/plane-it-right/intro-plane-it-right.png
      badge: Flagship Platform
      cornerEmoji: "✈️"
      emojiRow: 🧳 🏷️ ⚡
      previewTitle: Plane It Right
      previewBlurb: Airport luggage sorting simulation &amp; AI content authoring suite.
      footerLeft: Dual-Sided Architecture
      footerRight: Unity WebGL + AI
      tags:
        - { label: Unity C#, highlight: true }
        - { label: Generative AI, highlight: true }
        - { label: Instructional Cracking }
        - { label: Game-Based }
      title: "Plane It Right: Learning Game &amp; AI Generator"
      description: >-
        An interactive sorting game for learners paired with a no-code AI
        generator for educators—transforming quizzes and learning into a fun, engaging experience.

#    - href: /cases/video-editing/
#      ariaLabel: Video Editing Case Study
#      delay: 2
#      gradient: ["#1d1726", "#0d0914"]
#      badge: Content Architecture
#      cornerEmoji: "🎬"
#      emojiRow: 🎞️ 📐 ✂️
#      previewTitle: Video Editing Guided Site
#      previewBlurb: Task-based learning architecture for beginner creators.
#      footerLeft: Task Sequences
#      footerRight: Self-Paced Web
#      tags:
#        - { label: Task Analysis, highlight: true }
#        - { label: Content Strategy }
#        - { label: Web UI }
#      title: Video Editing Guided Website
#      description: >-
#        Deconstructing complex technical editing software into progressive,
#        task-based learning steps that eliminate software overwhelm and connect
#        rules to practice.

philosophy:
  eyebrow: Instructional Foundations
  heading: Core Philosophy &amp; Strengths
  hook: >-
    Every interface and interaction is grounded in learning theory, motivation
    psychology, and cognitive ergonomics.
  pillars:
    - icon: "🎯"
      title: Retrieval Automaticity
      body: >-
        Moving beyond binary multiple-choice recognition. Designing interactive
        pacing that builds speed, cognitive confidence, and real-time fluency
        under mild pressure.
    - icon: "🔄"
      title: Non-Punitive Mastery Loops
      body: >-
        Replacing frustrating "Game Over" penalties with intelligent recovery
        queues that re-introduce missed concepts dynamically until true mastery is
        achieved.
    - icon: "🤖"
      title: AI Authoring Multiplier
      body: >-
        Integrating generative AI directly into authoring pipelines to help
        educators generate balanced items, plausible distractors, and targeted
        feedback in seconds.

process:
  eyebrow: The Methodology
  heading: How I Crack Instructional Problems
  hook: >-
    A transparent 4-stage framework for turning complex subject matter into
    high-impact learning products.
  stages:
    - number: "01"
      title: Cognitive Gap &amp; Audience Discovery
      body: >-
        I start by diagnosing the exact cognitive bottleneck: Is it a
        <strong>knowledge gap</strong> (they don't know the rules), a
        <strong>fluency gap</strong> (they know the rules but hesitate under
        pressure), or a <strong>motivation gap</strong>? I map the audience's
        mental models and identify the high-risk failure points in their actual
        working environment.
    - number: "02"
      title: Experiential Metaphors &amp; Interaction Loops
      body: >-
        Rather than defaulting to generic bullet points or multiple-choice
        questions, I find an <strong>experiential anchor</strong> (e.g., an
        airport conveyor belt for categorical sorting, a dinner-rush table for
        restaurant service). Every mechanic is engineered to reinforce the target
        cognitive pathway and sustain flow state.
    - number: "03"
      title: Rapid Prototyping in Unity, Storyline &amp; Web
      body: >-
        I turn instructional storyboards into functional code and interactive
        prototypes quickly. Handling both design and programming ensures that
        pedagogical subtleties—such as non-punitive mastery loops and pause
        occlusion—are preserved accurately in the final build.
    - number: "04"
      title: AI Acceleration &amp; Pedagogical Guardrails
      body: >-
        I deploy generative AI to eliminate tedious manual authoring while
        establishing strict defensive guardrails. The result is a scalable
        educational system where instructors can produce high-quality customized
        content in minutes.

about:
  eyebrow: Background
  heading: About Tal Matania
  hook: Instructional designer, learning technologist, and details-obsessed builder.
  greeting: "Nice to meet you — I’m Tal :)"
  body: >-
    I’m an Instructional Designer and Learning Technologies student who loves turning complex content into clear, engaging, and interactive learning experiences.<br><br>My work sits at the intersection of instructional strategy, visual design, and development. I enjoy taking a project from content analysis and concept through design, build, and delivery.<br><br>I currently work as an Instructional Designer at Rambam Medical Center, where I create digital learning experiences for clinical environments and combine instructional thinking, AI tools, and hands-on development to make learning practical and accessible.
  offScreen: "Pilates, good design, and an ongoing search for the perfect Asian dish :)"
  image: "/assets/about/profile-tal.jpeg"

toolkit:
  eyebrow: Capabilities
  heading: My Toolkit.
  hook: The technologies, authoring platforms, and tools I use daily.
  groups:
    - icon: "🎯"
      title: Learning & Media
      tools: [Articulate Storyline, Genially, Camtasia, HeyGen]
    - icon: "🎨"
      title: Design
      tools: [Figma, Adobe Illustrator, Canva]
    - icon: "💻"
      title: Development
      tools: [Unity, C#, HTML, JavaScript, Antigravity]

cvBanner:
  heading: Let's build something great.
  body: >-
    Download my CV to explore my academic background, clinical experience, and
    full skillset.
  buttonLabel: Download My CV
---
