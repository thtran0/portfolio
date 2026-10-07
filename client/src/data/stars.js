const stars = [
  {
    slug: "sound",
    title: "Sound Physicians",
    x: 300,
    y: 50,
    size: 5,
    constellations: ["care"],
    type: "experience",
    role: "Software Development Intern",
    dates: "Jun 2026 – Aug 2026",
    challenge:
      "Business teams built recurring performance reports for clients by hand. Gathering data and writing summaries created bottlenecks every cycle.",
    whatIDid: [
      "I built an AI-powered tool in Python that gathers data from multiple sources, generates summaries, and produces consistent visuals. I used AI coding tools to move quickly, and validated everything they produced across weekly releases.",
      "The hardest part wasn't the code: it was choosing the right tools and understanding what my stakeholders on the anesthesia team actually needed.",
    ],
    impact:
      "Cut reporting time by 50% for the Anesthesia Service Line, with an approach designed to scale across other service lines.",
    reflection:
      "Start with the user, not the tool. My first version was smart, but it needed so much setup that it would have been hard to use. Technically impressive isn't the same as helpful.",
    tags: ["Python", "AI automation", "Data pipelines"],
  },
  {
    slug: "orthonyx",
    title: "Orthonyx",
    x: 120,
    y: 130,
    size: 5,
    constellations: ["care"],
    type: "experience",
    role: "Software Engineering Intern",
    dates: "May 2025 – Jun 2026",
    challenge:
      "Access to healthcare is uneven, and the gaps hurt the people who need care most. How might AI help patients get support between appointments, and know when to reach a real person?",
    whatIDid: [
      "I helped design and build the patient-facing experience for an AI-powered orthopedic platform: post-op check-ins, medication reminders, and an assistant patients could ask anything, anytime.",
      "I also built the logic that routed unresolved cases to health professionals in real time. Many users were older adults, so I focused on making dense medical information feel calm and easy to navigate.",
    ],
    takeaway:
      "Clear design is a form of care. When the stakes are someone's health, simplicity isn't a style choice.",
    reflection:
      "Ask more questions, sooner. I joined a large existing codebase and wish I'd spent more time early on learning how all the pieces fit together.",
    tags: ["JavaScript", "Python", "APIs", "Healthcare"],
  },
  {
    slug: "research",
    title: "Mental Health Research",
    x: 200,
    y: 300,
    size: 4,
    constellations: ["care", "connection"],
    type: "research",
    role: "Undergraduate Researcher",
    dates: "Jan 2024 – Jun 2026",
    challenge:
      "Mental health support is inconsistent, leaving gaps between need and availability. Guided self-help exists, but it can feel impersonal. Could a robot make support feel more interactive?",
    whatIDid: [
      "Working with Professor Maya Cakmak at the University of Washington and faculty at the University of Michigan, I helped develop robot-mediated mental health micro-interventions, using LLMs to generate therapeutic interactions grounded in evidence-based frameworks like DBT and ACT.",
      "We studied existing interventions and what made them effective, then designed new workflows and responses, and piloted prototypes to evaluate whether LLM-generated content could work in practice.",
    ],
    tags: ["LLMs", "Human-robot interaction", "Research"],
  },
  {
    slug: "vicinity",
    title: "Vicinity",
    x: 520,
    y: 280,
    size: 3,
    constellations: ["connection", "community"],
    type: "project",
    tags: ["React", "Firebase", "Google Maps API"],
  },
  {
    slug: "umessage",
    title: "uMessage",
    x: 600,
    y: 270,
    size: 4,
    constellations: ["connection"],
    type: "project",
    tags: ["Java", "Data structures", "JUnit"],
  },
  {
    slug: "scheduling",
    title: "Scheduling Tool",
    x: 620,
    y: 380,
    size: 3,
    constellations: ["connection"],
    type: "project",
  },
  {
    slug: "time",
    title: "Time Tool",
    x: 700,
    y: 310,
    size: 3,
    constellations: ["connection"],
    type: "project",
  },
  {
    slug: "ambassador",
    title: "Lead Ambassador",
    x: 450,
    y: 220,
    size: 6,
    constellations: ["care", "community"],
    type: "leadership",
    role: "Lead Ambassador, Paul G. Allen School of Computer Science & Engineering",
    dates: "Mar 2023 – Jun 2026",
    tags: ["Leadership", "Outreach", "K–12 education"],
  },
];

export const links = [
  ["orthonyx", "research"],
  ["orthonyx", "sound"],
  ["research", "ambassador"],
  ["sound", "ambassador"],
  ["vicinity", "ambassador"],
  ["vicinity", "umessage"],
  ["vicinity", "scheduling"],
  ["time", "scheduling"],
  ["time", "umessage"],
];

export const types = [
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "research", label: "Research" },
  { id: "leadership", label: "Leadership" },
];

export default stars;