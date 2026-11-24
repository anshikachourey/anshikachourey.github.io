/*
 * EDIT THIS FILE FIRST.
 * Add your actual contact links below; blank values are intentionally hidden.
 * Edit project descriptions/metrics so every statement matches your work.
 */
const profile = {
  email: "",
  github: "",
  linkedin: "",
  resume: "", // e.g. "./assets/Anshika_Chourey_Resume.pdf"
};


const projects = [
  {
    number: "01",
    name: "ContextGraph",
    eyebrow: "PERSONAL PROJECT / FULL-STACK + AI",

    description:
      "Built a full-stack LLM memory system that transforms conversations into persistent knowledge graphs. Designed a fault-tolerant Python/TypeScript architecture with deterministic validation and crash-safe commits, reducing false entity matches by 18%.",

    tags: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "React Flow"
    ],

    keyStat: "797 automated tests",
    visual: "graph",

    detailTitle: "Graph-based conversational memory",

    challenge:
      "Long conversations contain evolving facts, ambiguous references, and relationships that conventional chat history makes difficult to retrieve.",

    engineering:
      "Built a full-stack system using Next.js, Python/FastAPI, and PostgreSQL through Supabase. Separated LLM-based semantic reasoning from deterministic TypeScript graph validation, implemented adaptive similarity thresholds for entity matching, and designed crash-safe persistence to preserve graph consistency.",

    outcome:
      "Reduced false entity matches by 18% across 120 labeled cases and developed 797 automated tests to verify system behavior and prevent regressions.",

    link:
      "https://github.com/anshikachourey/contextgraph"
  },

  {
    number: "02",
    name: "SocialCirkle",
    eyebrow: "PERSONAL PROJECT / MOBILE + FULL-STACK",

    description:
      "Developed a location-based social app using React Native and Firebase, enabling nearby discovery and real-time invitations within selected locations. Built backend workflows with Firestore, Firebase Authentication, and Cloud Functions to validate group memberships and enforce access controls.",

    tags: [
      "React Native",
      "Node.js",
      "Firebase",
      "Firestore",
      "Cloud Functions"
    ],

    keyStat: "Location-aware social app",
    visual: "social",

    detailTitle: "Location-based social networking",

    challenge:
      "Creating a mobile experience that connects nearby users while maintaining secure access to groups and location-based interactions.",

    engineering:
      "Built the mobile application using React Native with Firebase services. Implemented location-aware discovery and invitation workflows, Firebase Authentication, Firestore persistence, and server-side group membership validation using Cloud Functions.",

    outcome:
      "Developed the core mobile and backend functionality for proximity-based social interactions, with additional product features under development.",

    link:
      "https://github.com/anshikachourey/socialcirkle"
  },

  {
    number: "03",
    name: "TileForge",
    eyebrow: "PERSONAL PROJECT / GPU COMPUTING",

    description:
      "Developed FP16 matrix multiplication kernels in CUDA C++ and Triton, analyzing Tensor Core execution and optimizing GPU memory access. Achieved a 1.66× speedup over a naive CUDA WMMA baseline for 1024×1024 matrices using shared-memory tiling.",

    tags: [
      "CUDA C++",
      "Triton",
      "PyTorch",
      "WMMA",
      "GPU Optimization"
    ],

    keyStat: "1.66× speedup",
    visual: "tileforge",

    detailTitle: "GPU kernel optimization",

    challenge:
      "Understanding how low-level GPU instruction execution and memory access patterns affect matrix multiplication performance.",

    engineering:
      "Implemented and benchmarked FP16 matrix multiplication kernels on an NVIDIA Tesla T4 GPU using CUDA C++ and Triton. Analyzed generated SASS instructions to verify Tensor Core utilization, then optimized CUDA WMMA kernels through shared-memory tiling.",

    outcome:
      "Achieved a 1.66× speedup over a naive CUDA WMMA baseline for 1024×1024 matrices. Validated numerical correctness and investigated performance differences across matrix sizes.",

    link:
      "https://github.com/anshikachourey/triton-gpu-kernels"
  }
];


// const projects = [
//   {
//     number: "01",
//     name: "ContextGraph",
//     eyebrow: "PERSONAL PROJECT / FULL-STACK + AI",
//     description: "A conversational memory system that turns discussions into a structured graph of entities, relationships, and evidence.",
//     tags: ["Next.js", "TypeScript", "Python", "Supabase", "React Flow"],
//     keyStat: "797 automated tests",
//     visual: "graph",
//     detailTitle: "Memory that stays inspectable.",
//     challenge: "Conversations contain evolving concepts, conflicting references, and context that is hard to recover later.",
//     engineering: "Built a full-stack graph-based memory application with identity resolution, provenance, multi-conversation workspaces, and row-level security. The architecture separates Python-based LLM interpretation from deterministic TypeScript graph validation and persistence.",
//     outcome: "Built a suite of 797 automated tests and measured an 18% reduction in false matches on a labeled evaluation.",
//     link: "", // Add a repository or demo URL when ready.
//   },
//   {
//     number: "02",
//     name: "Real-time moderation pipeline",
//     eyebrow: "FIRST CONTACT / PRODUCT ENGINEERING INTERNSHIP",
//     description: "A high-throughput moderation workflow combining streaming infrastructure with on-device ML inference.",
//     tags: ["Kafka", "PyTorch", "Python", "CI"],
//     keyStat: "500+ events / second",
//     visual: "pipeline",
//     detailTitle: "Streaming, inference, and reliability.",
//     challenge: "Moderating user-generated events at scale without sacrificing responsive product behavior.",
//     engineering: "Worked on a Kafka-based real-time moderation pipeline using on-device PyTorch inference. Analyzed 1,600+ feedback records to prioritize features and added Selenium/Jenkins tests covering over 25 scenarios.",
//     outcome: "Pipeline processed more than 500 events per second on a platform serving over 100,000 users.",
//     link: "", // Internship code may be private; leaving this blank is fine.
//   },
//   {
//     number: "03",
//     name: "Indoor navigation research",
//     eyebrow: "TEXAS A&M / HCI ENGINEERING & DESIGN LAB",
//     description: "Computer vision and graph-based route tracking for understanding movement through indoor spaces.",
//     tags: ["Python", "OpenCV", "PyTorch", "Graph modeling"],
//     keyStat: "87% F1 · 18 FPS",
//     visual: "navigation",
//     detailTitle: "Perception into route structure.",
//     challenge: "Recognizing doorway crossings and reconstructing routes in indoor environments with limited contextual information.",
//     engineering: "Developed doorway detection components and a room-graph route-tracking backend. Evaluated the approach on over 120 crossings and more than 30 route runs in a seven-room environment.",
//     outcome: "Achieved 87% doorway-detection F1 at 18 FPS and 91% route accuracy in the evaluated setting.",
//     link: "",
//   },
//   {
//     number: "04",
//     name: "Document intelligence workflows",
//     eyebrow: "OUTAMATION / AI WORKFLOW EXTERN",
//     description: "Retrieval and multilingual OCR workflows for extracting information from mortgage documents.",
//     tags: ["Python", "LlamaIndex", "TensorFlow", "RAG"],
//     keyStat: "~40% fewer hallucinations",
//     visual: "documents",
//     detailTitle: "Making retrieval more dependable.",
//     challenge: "Mortgage documents are heterogeneous, multilingual, and difficult to search reliably.",
//     engineering: "Built and evaluated a LlamaIndex-based retrieval workflow and a TensorFlow OCR pipeline supporting twelve languages. Compared retrieval strategies, tokenization, and chunking choices.",
//     outcome: "Reduced hallucinations by approximately 40% on a 200-query evaluation; OCR workflow saved an estimated three or more hours of daily manual work.",
//     link: "",
//   },
// ];

const experience = [
  { date: "SEP 2026 — PRESENT", role: "Undergraduate Researcher", company: "HCI Engineering & Design Lab · Texas A&M", detail: "Computer vision, indoor navigation, route modeling" },
  { date: "JUN — AUG 2025", role: "Product Engineering Intern", company: "First Contact", detail: "Real-time moderation, data workflows, automated testing" },
  { date: "MAY — AUG 2025", role: "AI Workflow Automation Extern", company: "Extern (Outamation)", detail: "Retrieval-augmented generation, document OCR, evaluation" },
  { date: "MAY — AUG 2024", role: "Software Engineering Intern", company: "Vedayan Wellness Clinic", detail: "Django, React, MySQL, scheduling services" },
];

// The following illustrations are conceptual diagrams, not actual product screenshots.
const visuals = {
  graph: `<svg class="art-svg" viewBox="0 0 420 240" role="img" aria-label="Conceptual interconnected knowledge graph"><g stroke="currentColor" stroke-width="1.1" opacity=".38"><path d="M110 55 207 98 306 48M207 98 331 168M207 98 112 187M112 187 260 198M260 198 331 168M110 55 112 187M306 48 331 168M207 98 260 198" /></g><g fill="var(--art-fill)" stroke="currentColor" stroke-width="1.5"><rect x="75" y="30" width="70" height="44" rx="8"/><rect x="166" y="75" width="82" height="48" rx="8"/><rect x="274" y="24" width="64" height="48" rx="8"/><rect x="74" y="163" width="76" height="46" rx="8"/><rect x="226" y="177" width="68" height="43" rx="8"/><rect x="294" y="143" width="74" height="48" rx="8"/></g><g fill="currentColor" font-size="10" font-family="monospace" text-anchor="middle"><text x="110" y="56">person</text><text x="207" y="101">concept</text><text x="306" y="52">fact</text><text x="112" y="190">source</text><text x="260" y="201">memory</text><text x="331" y="171">link</text></g></svg>`,
  pipeline: `<svg class="art-svg" viewBox="0 0 420 240" role="img" aria-label="Conceptual event processing pipeline"><g stroke="currentColor" fill="none" stroke-width="1.4" opacity=".6"><path d="M60 105H125M186 105H250M315 105H363" stroke-dasharray="4 6"/><path d="m115 100 10 5-10 5m125-10 10 5-10 5m103-10 10 5-10 5"/></g><g stroke="currentColor" stroke-width="1.3" fill="var(--art-fill)"><rect x="22" y="71" width="80" height="68" rx="9"/><rect x="125" y="71" width="80" height="68" rx="9"/><rect x="248" y="71" width="80" height="68" rx="9"/><rect x="363" y="91" width="35" height="29" rx="5"/></g><g fill="currentColor" font-family="monospace" font-size="10" text-anchor="middle"><text x="62" y="102">events</text><text x="62" y="118">→</text><text x="165" y="102">Kafka</text><text x="165" y="118">stream</text><text x="288" y="102">on-device</text><text x="288" y="118">ML</text><text x="380" y="109">✓</text></g><g stroke="currentColor" opacity=".2"><path d="M20 158H398M20 167H398M20 176H398" /></g></svg>`,
  navigation: `<svg class="art-svg" viewBox="0 0 420 240" role="img" aria-label="Conceptual indoor routing map"><g stroke="currentColor" stroke-width="1.4" fill="none" opacity=".52"><path d="M66 28H326V201H66zM66 84H326M184 28V84M252 84V148M66 148H252M144 148V201M252 148H326"/><path d="M142 84h24m-12-12v24m98 52h24m-12-12v24" stroke="var(--art-bg)" stroke-width="6"/></g><path d="M103 171 103 115 214 115 214 58 285 58" fill="none" stroke="var(--accent)" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="1 0"/><circle cx="103" cy="171" r="7" fill="var(--accent)"/><circle cx="285" cy="58" r="7" fill="none" stroke="var(--accent)" stroke-width="3"/><g font-family="monospace" font-size="10" fill="currentColor"><text x="113" y="190">start</text><text x="296" y="50">end</text></g></svg>`,
  documents: `<svg class="art-svg" viewBox="0 0 420 240" role="img" aria-label="Conceptual document retrieval pipeline"><g fill="var(--art-fill)" stroke="currentColor" stroke-width="1.5"><rect x="72" y="35" width="115" height="150" rx="8"/><rect x="118" y="54" width="115" height="150" rx="8"/><rect x="245" y="78" width="105" height="107" rx="9"/></g><g stroke="currentColor" opacity=".4"><path d="M142 85H208M142 99H200M142 113H206M142 127H176M142 151H198M142 165H187"/></g><circle cx="297" cy="126" r="18" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="m309 140 19 20" stroke="currentColor" stroke-width="2.5"/><text x="297" y="129" font-size="10" font-family="monospace" text-anchor="middle" fill="currentColor">RAG</text></svg>`
};

visuals.social = `
  <svg
    class="art-svg"
    viewBox="0 0 420 240"
    role="img"
    aria-label="Conceptual location-based social network"
  >
    <!-- Location connections -->
    <g
      stroke="var(--accent)"
      stroke-width="1.5"
      stroke-dasharray="5 6"
      opacity="0.65"
      fill="none"
    >
      <path d="M85 75 L210 125 L340 65" />
      <path d="M85 75 L125 190 L210 125" />
      <path d="M210 125 L315 190 L340 65" />
    </g>

    <!-- People and locations -->
    <g
      fill="var(--art-fill)"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <circle cx="85" cy="75" r="24" />
      <circle cx="340" cy="65" r="24" />
      <circle cx="125" cy="190" r="24" />
      <circle cx="315" cy="190" r="24" />

      <circle
        cx="210"
        cy="125"
        r="36"
        stroke="var(--accent)"
        stroke-width="2.5"
      />
    </g>

    <!-- Center location pin -->
    <path
      d="M210 106
         C199 106 193 114 193 124
         C193 136 210 151 210 151
         C210 151 227 136 227 124
         C227 114 221 106 210 106Z"
      fill="none"
      stroke="var(--accent)"
      stroke-width="2"
    />

    <circle
      cx="210"
      cy="123"
      r="5"
      fill="var(--accent)"
    />

    <!-- User symbols -->
    <g
      fill="currentColor"
      opacity="0.8"
    >
      <circle cx="85" cy="70" r="6" />
      <circle cx="340" cy="60" r="6" />
      <circle cx="125" cy="185" r="6" />
      <circle cx="315" cy="185" r="6" />
    </g>
  </svg>
`;


function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[ch]);
}

function renderProjects() {
  const list = document.querySelector("#project-list");
  list.innerHTML = projects.map((p, i) => `
    <article class="project-row">
      <div class="project-copy"><div class="project-meta"><span>${escapeHtml(p.number)} / ${escapeHtml(p.eyebrow)}</span></div>
        <h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p>
        <div class="tag-list">${p.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join("")}</div>
        
<div class="project-actions">
  <a
    href="${escapeHtml(p.link)}"
    class="project-btn repository-btn"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit repository <span aria-hidden="true"></span>
  </a>

  <button
  class="project-btn demo-btn"
  type="button"
  disabled
>
  Live demo coming soon <span aria-hidden="true"></span>
</button>
</div>

      </div>
      <div class="project-art art-${escapeHtml(p.visual)}" aria-hidden="true"><div class="art-top"><span>FIG. 0${i+1}</span><span>ENGINEERING / NOTES</span></div>${visuals[p.visual]}<div class="art-bottom"><span>CONCEPTUAL DIAGRAM</span><span>${escapeHtml(p.keyStat)}</span></div></div>
    </article>`).join("");
}

function openProject(i) {
  const p = projects[i];
  if (!p) return;
  document.querySelector("#dialog-content").innerHTML = `<div class="dialog-eyebrow">${escapeHtml(p.number)} / PROJECT NOTES</div><h2>${escapeHtml(p.name)}</h2><p class="dialog-subtitle">${escapeHtml(p.detailTitle)}</p><div class="dialog-section"><h3>Problem</h3><p>${escapeHtml(p.challenge)}</p></div><div class="dialog-section"><h3>Engineering</h3><p>${escapeHtml(p.engineering)}</p></div><div class="dialog-section"><h3>Outcome</h3><p>${escapeHtml(p.outcome)}</p></div><div class="tag-list">${p.tags.map(tag=>`<span>${escapeHtml(tag)}</span>`).join("")}</div>${p.link?`<p class="dialog-visit"><a href="${escapeHtml(p.link)}" target="_blank" rel="noopener noreferrer">View project ↗</a></p>`:""}`;
  document.querySelector("#project-dialog").showModal();
}


function renderExperience() {
  const experienceList = document.querySelector("#experience-list");

  experienceList.innerHTML = experience.map((item) => `
    <article class="experience-node">

      <div class="experience-date">
        ${escapeHtml(item.date)}
      </div>

      <div class="experience-circle">

        <h3>${escapeHtml(item.role)}</h3>

        <p class="experience-company">
          ${escapeHtml(item.company)}
        </p>

        <p class="experience-summary">
          ${escapeHtml(item.detail)}
        </p>

      </div>

    </article>
  `).join("");
}


/* =========================================
   SCROLLING FLOWER EXPERIENCE TIMELINE
========================================= */

function initExperienceTimeline() {
  const list = document.querySelector(".experience-list");
  if (!list) return;

  const nodes = [...list.querySelectorAll(".experience-node")];
  if (!nodes.length) return;

  // Remove any previously created timeline elements
  list.querySelector(".experience-timeline-progress")?.remove();
  list.querySelector(".experience-timeline-marker")?.remove();

  // Colored line that follows the flower
  const progress = document.createElement("div");
  progress.className = "experience-timeline-progress";
  progress.setAttribute("aria-hidden", "true");

  // The little flower traveling down the timeline
  const flower = document.createElement("div");
  flower.className = "experience-timeline-marker";
  flower.textContent = "✿";
  flower.setAttribute("aria-hidden", "true");

  list.appendChild(progress);
  list.appendChild(flower);

  let ticking = false;

  function updateTimeline() {
    const listRect = list.getBoundingClientRect();

    // The flower follows this reading position on screen
    const readingLine = window.innerHeight * 0.45;

    const start = 20;
    const end = Math.max(start, list.offsetHeight - 20);

    // Convert scrolling into a position on the timeline
    const rawPosition = readingLine - listRect.top;

    const position = Math.max(
      start,
      Math.min(end, rawPosition)
    );

    flower.style.top = `${position}px`;
    progress.style.height = `${position - start}px`;

    // Show the flower while the reading line is
    // inside the experience timeline
    
const inTimeline =
listRect.bottom > 0 &&
listRect.top < window.innerHeight;

// Keep the flower visible while the timeline
// is anywhere on screen.
flower.style.opacity = inTimeline ? "1" : "0";


    // Identify the last date the flower has reached
    let activeIndex = -1;

    nodes.forEach((node, index) => {
      const date = node.querySelector(".experience-date");
      if (!date) return;

      const dateRect = date.getBoundingClientRect();
      const datePosition = dateRect.top + dateRect.height / 2;

      if (datePosition <= readingLine) {
        activeIndex = index;
      }
    });

    // Only the experience reached most recently
    // stays highlighted until the next date
    nodes.forEach((node, index) => {
      node.classList.toggle(
        "is-active",
        inTimeline && index === activeIndex
      );
    });

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;

    ticking = true;
    window.requestAnimationFrame(updateTimeline);
  }

  window.addEventListener("scroll", requestUpdate, {
    passive: true
  });

  window.addEventListener("resize", requestUpdate);

  updateTimeline();
}

// Must run after renderExperience()
initExperienceTimeline();


function renderContacts() {
  const items = [
    ["Email",profile.email?`mailto:${profile.email}`:""],
    ["GitHub",profile.github],
    ["LinkedIn",profile.linkedin],
    ["Résumé",profile.resume],
  ].filter(([,url])=>url);
  if (!items.length) return;
  document.querySelector("#contact-links").innerHTML = items.map(([label,url])=>`<a href="${escapeHtml(url)}" ${url.startsWith("http")?'target="_blank" rel="noopener noreferrer"':''}>${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`).join("");
}

function initTheme() {
  const toggle = document.querySelector("#theme-toggle");
  let saved = null;
  try { saved = localStorage.getItem("portfolio-theme"); } catch (_) { /* Previewing as a local file may block storage. */ }
  const apply = theme => { document.documentElement.dataset.theme = theme; toggle.setAttribute("aria-pressed",String(theme === "dark")); document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#111016" : "#f7f5f0"; };
  apply(saved === "dark" ? "dark" : "light");
  toggle.addEventListener("click",()=>{ const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; apply(next); try { localStorage.setItem("portfolio-theme",next); } catch (_) { /* Theme still works for this visit. */ } });
}

renderProjects();
renderExperience();
renderContacts();
initTheme();
document.querySelector("#year").textContent = String(new Date().getFullYear());
document.querySelector("#project-dialog").addEventListener("click", e=>{if (e.target === e.currentTarget) e.currentTarget.close();});


// Type out the homepage name only once per page load.
async function animateHeroName() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const first = document.querySelector(".typed-first");
  const last = document.querySelector(".typed-last");
  const dot = document.querySelector(".typed-dot");
  if (!first || !last || !dot) return;

  first.textContent = "";
  last.textContent = "";
  dot.textContent = "";

  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const type = async (element, text, speed) => {
    element.classList.add("is-typing");
    for (const character of text) {
      element.textContent += character;
      await pause(speed);
    }
    element.classList.remove("is-typing");
  };

  await pause(350);
  await type(first, "Anshika", 125);
  await pause(240);
  await type(last, "Chourey", 130);
  dot.textContent = ".";
}

animateHeroName();
