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
  heading: Hi, I'm <span class="marker-underline">Tal Matania</span>
  role: >-
    and I'm an <span class="highlight-orange">Instructional Designer</span> and a
    <span class="highlight-orange">learning technologies</span> student.
  valueProp: >-
    I blend <strong>pedagogical strategy</strong> with <strong>engaging
    interactive design</strong> and technical execution. My focus is on creating
    high-retention learning simulations, clinical microlearning, and game-based
    environments that make complex knowledge intuitive. Every experience is
    engineered to bridge cognitive theory with measurable real-world performance.
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
    - href: /cases/learning-game-generator/
      ariaLabel: Plane It Right Case Study
      delay: 1
      gradient: ["#1f1d1a", "#111110"]
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
        generator for educators—transforming dry taxonomy memorization into rapid
        retrieval automaticity.

    - href: /cases/surgical-ergonomics/
      ariaLabel: Surgical Ergonomics Case Study
      delay: 2
      gradient: ["#101c24", "#081016"]
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
      delay: 1
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

    - href: /cases/video-editing/
      ariaLabel: Video Editing Case Study
      delay: 2
      gradient: ["#1d1726", "#0d0914"]
      badge: Content Architecture
      cornerEmoji: "🎬"
      emojiRow: 🎞️ 📐 ✂️
      previewTitle: Video Editing Guided Site
      previewBlurb: Task-based learning architecture for beginner creators.
      footerLeft: Task Sequences
      footerRight: Self-Paced Web
      tags:
        - { label: Task Analysis, highlight: true }
        - { label: Content Strategy }
        - { label: Web UI }
      title: Video Editing Guided Website
      description: >-
        Deconstructing complex technical editing software into progressive,
        task-based learning steps that eliminate software overwhelm and connect
        rules to practice.

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
  portrait:
    emoji: 👨‍💻
    name: Tal Matania
    role: Instructional Designer
    badge: Rambam Medical Center
  cards:
    - title: Bridging Learning Theory &amp; Interactive Design
      body: >-
        Driven by a deep love for cognitive clarity and aesthetic excellence, I
        specialize in Instructional Design to own the entire creative
        pipeline—from pedagogical gap analysis to UI/UX design, interactive
        prototyping, and AI workflow automation.
    - title: Clinical &amp; Healthcare Experience
      body: >-
        In my work as an Instructional Designer at <strong>Rambam Health Care
        Campus</strong>, I develop just-in-time microlearning tools, clinical
        habit systems, and AI-accelerated workflows for high-stakes medical teams.

toolkit:
  eyebrow: Capabilities
  heading: The Technical Toolkit
  hook: The technologies, authoring platforms, and AI tools I use daily.
  groups:
    - icon: "🎨"
      title: UI/UX &amp; Design
      tools: [Figma, Design Systems, Adobe Illustrator, Photoshop]
    - icon: "🕹️"
      title: Game Engines &amp; Code
      tools: [Unity (C#), HTML5 / CSS3, JavaScript, WebGL]
    - icon: "📚"
      title: Instructional Authoring
      tools: [Articulate Storyline, Premiere Pro, Task Analysis, Microlearning]
    - icon: "🤖"
      title: AI &amp; Innovation
      tools: [ChatGPT, Claude, Midjourney, Prompt Pipelines]

cvBanner:
  heading: Let's build something great.
  body: >-
    Download my CV to explore my academic background, clinical experience, and
    full skillset.
  buttonLabel: Download My CV
---
