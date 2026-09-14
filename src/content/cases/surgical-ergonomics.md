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
    A mobile learning app designed for surgeons at Rambam Health Care Campus, offering short, focused ergonomics videos supported by an illustrated AI character guide.
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
    A mobile learning app designed for surgeons at Rambam Health Care Campus, offering short, focused ergonomics videos supported by an illustrated AI character guide to encourage healthier posture and safer working habits in the operating room.

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
      Camtasia, HeyGen, Figma, Canva, AI tools, Google AI Studio, AI-assisted coding / development, Render — Website deployment platform
  - icon: 🎯
    title: Solution
    body: >-
      A mobile microlearning app featuring 7 short ergonomics topics, each accessible through a visual navigation screen and supported by short instructional videos.

evidence:
  eyebrow: 01 / The Problem
  heading: The Problem, by the Numbers
  intro: "Before designing the solution, I wanted to first understand the problem and its impact. Research consistently shows that ergonomic strain is common among surgeons, affects their work, and is often not addressed through formal training."
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
  eyebrow: ""
  heading: The Ergonomic Reality
  context: >-
    This project was created for surgeons at Rambam Health Care Campus, where ergonomic strain during surgery is an important occupational concern. The instructional need was to help surgeons reduce musculoskeletal strain and injury caused by prolonged, repetitive, and awkward working postures in the operating room.
  body: >-
    The challenge was not simply a lack of knowledge. Small ergonomic habits can repeat throughout procedures and accumulate over years of practice, increasing physical strain over time. The project therefore focused on common surgical scenarios where practical ergonomic guidance could have the greatest relevance to everyday clinical work.

challenge:
  eyebrow: 02 / The Challenge
  heading: The Challenge
  body: >-
    <div class="content-block"><h4 class="content-block-subheading">Audience &amp; Context</h4><p>The audience included both surgeons and surgical residents across different levels of experience. Because they work in a fast-paced clinical environment, the solution needed to be immediately accessible, easy to navigate, and useful without requiring learners to complete a full course.</p></div><div class="content-block"><h4 class="content-block-subheading">Performance Gap</h4><p>Together with the project’s clinical lead, the audience and working context were analyzed to identify the performance gap between recommended ergonomic practice and what actually happens during surgery.</p></div><div class="content-block"><h4 class="content-block-subheading">Clinical Collaboration</h4><p>The project was developed in collaboration with clinical and ergonomics experts. Content expertise came from an external ergonomics consultant brought into Rambam, alongside a Rambam researcher with clinical research experience in surgeon ergonomics. The project was clinically led by a head-and-neck surgeon, who helped define the target audience, working conditions, common surgical scenarios, and key performance gaps.</p></div>
  takeaway: >-
    The challenge was not only to teach ergonomic principles, but to make them easy to access and apply in real operating-room conditions.
  problems:
    - Fit into a busy clinical context
    - Provide quick access to specific ergonomic topics
    - Present information in a highly visual and practical format
    - Support just-in-time learning rather than lengthy formal training

learningSolution:
  eyebrow: 03 / The Learning Solution
  heading: The Learning Solution
  context: >-
    To address this challenge, I designed a mobile learning app that delivers ergonomic guidance through seven short, focused learning topics. Each topic is presented visually and opens a short video explanation, allowing learners to quickly access the guidance most relevant to them.
  body: >-
    The app opens with a short introductory video featuring an illustrated guide character, and then transitions into the main learning interface. From there, users can choose one of seven topics, each linked to a dedicated ergonomics video. Each video remains under two minutes in length in order to support quick, digestible learning.<br><br><strong>Why an App?</strong><br>The learning needed to be available whenever the need arose—not locked inside a one-time training experience. A mobile app allowed the content to remain accessible, non-linear, quick to consume, and available at the point of need. Surgeons could choose the relevant procedure or topic and immediately access a short piece of guidance instead of searching through a full course.

contentStrategy:
  eyebrow: 04 / Content Strategy
  heading: Point-of-Need Microlearning
  body: >-
    The content strategy was intentionally designed around point-of-need learning rather than a traditional one-time course. Instead of asking surgeons to move through a linear training program, the content was organized so they could access the specific guidance they needed, when they needed it.<br><br>The most common surgical scenarios were selected, and the expert content was analyzed to identify the essential ergonomic actions for each one. The information was then reduced into short, focused videos that communicate practical guidance quickly and clearly. This required translating specialist clinical knowledge into concise, action-oriented microlearning that could work for both residents and experienced surgeons.<br><br><span style="display: block; font-size: 1.25rem; font-weight: 600; color: var(--orange); margin-top: 1.5rem; padding-left: 1rem; border-left: 4px solid var(--orange);">"The goal was not to create another course. It was to make the right information available at the exact moment it could be useful."</span>
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
    • The final result was designed to help surgeons access the right information quickly and in context.<br><br><strong>Measuring Success</strong><br>Success was defined beyond content completion. The long-term organizational goal was to contribute to fewer surgeon absences caused by musculoskeletal problems by supporting better ergonomic habits during clinical work.
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
  eyebrow: 05 / Learning at the Point of Need
  heading: Learning at the Point of Need
  body: >-
    The learning experience extends beyond the app itself.<br><br>A QR poster placed near the operating-room environment creates a direct entry point to the learning experience, allowing surgeons and surgical residents to access relevant ergonomic guidance at the moment it may be most useful.<br><br>Instead of relying on learners to remember and return to a traditional course, the intervention brings the learning closer to the clinical workflow — connecting the physical workplace directly to short, actionable mobile guidance.
  followUp: >-
    See it. Scan it. Apply it.

visualGuide:
  eyebrow: 07 / Media & AI Production
  heading: Media & AI Production
  body: >-
    To create a consistent learning experience, I combined real clinical footage with AI-supported media production. The illustrated guide was animated and voiced using HeyGen, while the instructional videos were edited in Camtasia with narration, subtitles and focused visual sequencing.<br><br>The guide character was not used only as a decorative element. It created continuity across the app and helped connect multiple short videos into one recognizable learning experience.
  impact: >-
    I also developed the web application that delivers the learning content, using AI-assisted coding to translate the instructional concept and interface design into a working digital product.

reflection:
  eyebrow: 08 / Reflection
  heading: Reflection
  body: >-
    This project strengthened my ability to translate specialized professional knowledge into an accessible digital learning experience. It required balancing clinical credibility, concise instructional design, and a friendly visual approach. It also deepened my experience in creating learning products that combine UX thinking, video-based instruction, and AI-supported media.

nextCase:
  href: /cases/my-first-shift/
  label: "Next Case Study: My First Shift Onboarding"
---
