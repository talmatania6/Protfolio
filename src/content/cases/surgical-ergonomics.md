---
# Uniform case chrome. The bespoke showcase frame and the middle content
# sections live in src/pages/cases/surgical-ergonomics.astro.
#
# Fields marked "inline HTML" in src/content.config.ts render through set:html,
# so write tags and entities (&amp;) in those. Every other field is escaped on
# output, so write a plain "&" there.
meta:
  title: Surgical Ergonomics Companion — Tal Matania
  description: >-
    Instructional design case study: A mobile microlearning app for improving ergonomic awareness in the operating room.
  ogTitle: Surgical Ergonomics Companion — Tal Matania
  ogDescription: >-
    A mobile learning app designed for surgeons at Rambam Health Care Campus, offering short, focused ergonomics videos supported by an illustrated AI guide.
  ogImage: /assets/projects/surgical-ergonomics/surgical-ergonomics-hero.png

breadcrumb: Surgical Ergonomics

tags:
  - { label: Professional Clinical Work, highlight: true }
  - { label: Microlearning }
  - { label: HeyGen AI Avatar }
  - { label: Camtasia }
  - { label: Rambam Health Care Campus }

hero:
  title: Surgical Ergonomics Companion
  tagline: Mobile microlearning for improving ergonomic awareness in the operating room
  valueProp: >-
    A mobile learning app designed for surgeons at Rambam Health Care Campus, offering short, focused ergonomics videos supported by an illustrated AI guide to encourage healthier posture and safer working habits in the operating room.

subnav:
  - { href: "#overview", label: Overview }
  - { href: "#problem", label: The Problem }
  - { href: "#challenge", label: The Challenge }
  - { href: "#solution", label: The Learning Solution }
  - { href: "#strategy", label: Content Strategy }
  - { href: "#experience", label: The Learning Experience }
  - { href: "#just-in-time", label: QR Access }

glance:
  - icon: 👤
    title: Role
    body: >-
      <strong>Instructional Designer &amp; Digital Learning Developer</strong><br>
      Content analysis, learning architecture, microlearning design, script development, instructional video editing, UX design, and AI-assisted web development.
  - icon: 🛠️
    title: Tools
    body: >-
      Camtasia, HeyGen, Figma, Canva, AI tools, AI-assisted coding / development
  - icon: 🎯
    title: Solution
    body: >-
      A mobile microlearning app featuring 7 short ergonomics topics, each accessible through a visual navigation screen and supported by short instructional videos.

evidence:
  eyebrow: 01 / Why This Matters
  heading: The Evidence Behind the Problem
  intro: "Before designing the solution, I wanted to ground the challenge in evidence. Research consistently shows that ergonomic strain is common among surgeons, affects their work, and is often not addressed through formal training."
  stats:
    - value: "90%"
      description: "of surgeons performing minimally invasive surgery reported musculoskeletal disorders."
    - value: "69.7%"
      description: "of surveyed surgeons reported musculoskeletal pain."
    - value: "47.7%"
      description: "said musculoskeletal pain impacted their work."
    - value: "ONLY 23.8%"
      description: "had received prior ergonomics education."
  takeaway: "High physical strain, real impact on performance, and limited ergonomic training revealed a clear learning opportunity."
  sources:
    - "Gutierrez-Diez et al., 2018"
    - "Aaron et al., PLOS One, 2021"

problem:
  eyebrow: 02 / The Problem
  heading: The Ergonomic Reality
  context: >-
    This project was created for surgeons at Rambam Health Care Campus, where ergonomic strain during surgery is an important occupational concern. Surgeons often maintain demanding postures for long periods, while focusing primarily on the procedure itself rather than on their own body positioning.
  body: >-
    Although ergonomic recommendations exist, translating them into daily surgical practice remains a challenge. The need was not simply to provide information, but to make ergonomic guidance more accessible, practical, and easy to revisit in context.

challenge:
  eyebrow: 03 / The Challenge
  heading: The Challenge
  body: >-
    The source material included lengthy clinical recordings, often 30–60 minutes each. A major part of the instructional design process was analyzing this material, identifying the essential ergonomic messages, and transforming it into concise learning units that could be understood and applied quickly.<br><br>For a busy surgical audience, the content needed to remain clinically meaningful without becoming another lengthy training experience.
  takeaway: >-
    The challenge was not only to teach ergonomic principles, but to make them easy to access and apply in real operating-room conditions.
  problems:
    - fit into a busy clinical context
    - provide quick access to specific ergonomic topics
    - present information in a highly visual and practical format
    - support just-in-time learning rather than lengthy formal training

learningSolution:
  eyebrow: 04 / The Learning Solution
  heading: The Learning Solution
  context: >-
    To address this challenge, I designed a mobile learning app that delivers ergonomic guidance through seven short, focused learning topics. Each topic is presented visually and opens a short video explanation, allowing learners to quickly access the guidance most relevant to them.
  body: >-
    The app opens with a short introductory video featuring an illustrated guide character, and then transitions into the main learning interface. From there, users can choose one of seven topics, each linked to a dedicated ergonomics video. Each video remains under two minutes in length in order to support quick, digestible learning.

contentStrategy:
  eyebrow: 05 / Content Strategy
  heading: From Clinical Footage to Microlearning
  body: >-
    The original content was not created as training material. I received long clinical recordings containing demonstrations, explanations and repeated information. I reviewed the footage, identified the key ergonomic behaviors, and reorganized the material into seven focused learning topics.<br><br>Each topic was then reduced to a short instructional video of no more than two minutes. The goal was to preserve the essential professional guidance while removing unnecessary detail and making each learning unit easy to access and understand.
  architecture: >-
    The learning experience is organized around seven focused ergonomics topics. Rather than requiring learners to complete a linear course, each topic can be accessed independently based on the surgeon’s immediate need.
  decisions:
    - title: 1. ANALYZE
      body: Review 30–60 minute clinical recordings and identify the learning-relevant content.
    - title: 2. EXTRACT
      body: Define the key ergonomic principle and remove secondary or repetitive information.
    - title: 3. DESIGN
      body: Turn the content into a focused microlearning script / sequence for a video under two minutes.
    - title: 4. PRODUCE
      body: Combine edited clinical footage, narration, subtitles and the guide character into the final learning video.

experience:
  eyebrow: 06 / The Learning Experience
  heading: The Learning Experience
  body: >-
    The final result is a mobile microlearning experience that helps surgeons refresh key ergonomic principles in a quick, focused, and accessible way. The app combines visual navigation, short videos, narration, subtitles, and an illustrated guide character to turn complex clinical material into an experience that is easy to revisit and apply.
  flow: >-
    This is not just a standalone video, but a complete mobile learning flow designed for performance support:<br><br>
    • An illustrated guide introduces and supports the learner.<br>
    • The app provides quick access to focused ergonomic topics.<br>
    • Each topic opens a concise video combining selected clinical footage, narration, and subtitles.<br>
    • The final result was designed to help surgeons access the right information quickly and in context.
  interactiveVideo:
    heading: "Video-Based Guidance"
    body: "Each ergonomics topic opens a short instructional video that connects ergonomic recommendations to realistic operating-room situations."
  learnPractice:
    heading: "Focused Microlearning"
    body: "Each module focuses on one ergonomic topic and keeps the learning experience concise, with videos under two minutes."
  knowledgeCheck:
    heading: "Real Clinical Context"
    body: "Real operating-room footage helps connect ergonomic principles directly to the environment in which surgeons apply them."
  prioritization:
    heading: "On-Demand Access"
    body: "Surgeons can select the specific ergonomics topic they need instead of completing the content in a fixed sequence."
  progression:
    heading: "Guided Learning Experience"
    body: "An illustrated guide character creates continuity from the opening introduction through the instructional videos."

justInTime:
  eyebrow: 07 / Point-of-Need Access
  heading: Just-in-Time Access
  body: >-
    To make the learning experience easier to access in context, I also designed a supporting poster placed outside operating rooms. The poster includes a QR code that surgeons can scan on their phones to immediately open the app before entering surgery.<br><br>This creates a just-in-time learning touchpoint that supports quick memory refresh and makes the ergonomic guidance available at the point of need. The goal was to reduce friction and make the learning content easy to revisit in the moment it is most relevant.
  followUp: >-
    This extension turned the app into more than a standalone learning product. It became a practical performance-support tool, available directly in the work environment and aligned with the fast pace of clinical practice.

visualGuide:
  eyebrow: 08 / Media & AI Production
  heading: Media & AI Production
  body: >-
    To create a consistent learning experience, I combined real clinical footage with AI-supported media production. The illustrated guide was animated and voiced using HeyGen, while the instructional videos were edited in Camtasia with narration, subtitles and focused visual sequencing.<br><br>The guide character was not used only as a decorative element. It created continuity across the app and helped connect multiple short videos into one recognizable learning experience.
  impact: >-
    I also developed the web application that delivers the learning content, using AI-assisted coding to translate the instructional concept and interface design into a working digital product.

reflection:
  eyebrow: 09 / Reflection
  heading: Reflection
  body: >-
    This project strengthened my ability to translate specialized professional knowledge into an accessible digital learning experience. It required balancing clinical credibility, concise instructional design, and a friendly visual approach. It also deepened my experience in creating learning products that combine UX thinking, video-based instruction, and AI-supported media.

nextCase:
  href: /cases/my-first-shift/
  label: "Next Case Study: My First Shift Onboarding"
---
