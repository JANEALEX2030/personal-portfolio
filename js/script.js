document.documentElement.classList.add("js-ready");

const currentPage = location.pathname.split("/").pop() || "index.html";
const pageName = currentPage === "index.html" ? "home" : currentPage.replace(".html", "");

document.querySelectorAll(".primary-nav a[data-page]").forEach((link) => {
  if (link.dataset.page === pageName) link.setAttribute("aria-current", "page");
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("is-open", !expanded);
  });
}

const projectDetails = {
  "student-voting": {
    title: "DMI BSc-15 Student Management & Voting System",
    category: "Student services · October 2026",
    description: "A university cohort platform for voter verification, confidential digital ballots, automated vote counting, and student record coordination.",
    problem: "Paper ballot counting caused delays, disputes, and verification bottlenecks. The system streamlines student verification and provides immediate election results.",
    features: [
      "Student ID verification against the cohort registry.",
      "Confidential ballot casting with duplicate-vote prevention.",
      "Live election analytics and vote totals.",
      "Administrative tools for candidate nominations and ballot auditing.",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Tailwind CSS", "REST API"],
    role: "Lead Architect & Full-Stack Developer",
  },
  inventory: {
    title: "Inventory Control System",
    category: "Operations · August 2026",
    description: "A Python desktop application for managing inventory items, orders, restocking, and low-stock levels.",
    problem: "The application replaces manual inventory tracking with a database-backed interface for item and order management.",
    features: [
      "User registration and login.",
      "Add, update, and delete inventory items.",
      "Place orders and track stock levels.",
      "Restock items and identify low-stock items.",
    ],
    technologies: ["Python", "SQLite", "Tkinter"],
    role: "Developer",
    repositoryUrl: "https://github.com/JANEALEX2030/inventory-control-system",
  },
  sender: {
    title: "Email Client Application",
    category: "Communication · July 2026",
    description: "A Python desktop email client for sending messages and viewing recent inbox messages.",
    problem: "The client brings email composition and inbox access together in a desktop interface.",
    features: [
      "Send emails using SMTP.",
      "Fetch and view recent messages using IMAP.",
      "Store and load email configuration.",
      "Run email operations in background threads.",
    ],
    technologies: ["Python", "Tkinter", "SMTP", "IMAP", "Threading"],
    role: "Developer",
    repositoryUrl: "https://github.com/JANEALEX2030/EMAIL-SENDER-APPLICATION",
  },
  wellness: {
    title: "Mental Health Companion System",
    category: "Digital wellness · May 2026",
    description: "A Flutter mobile application for mental wellness, connected to a Flask development backend.",
    problem: "The project explores a mobile interface for providing mental wellness support.",
    features: [
      "Daily mood journaling and sentiment trends.",
      "Guided grounding and breathing exercises.",
      "Weekly wellbeing summaries and self-care suggestions.",
      "Emergency contact and campus counselor resources.",
    ],
    technologies: ["Flutter", "Dart", "Python", "Flask"],
    role: "Developer",
    repositoryUrl: "https://github.com/JANEALEX2030/mental-health-companion-system",
  },
};

const projectCards = [...document.querySelectorAll(".project-card[data-category]")];
const filterButtons = [...document.querySelectorAll("[data-filter]")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    projectCards.forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

const projectDialog = document.querySelector("#project-dialog");
if (projectDialog instanceof HTMLDialogElement) {
  const fillText = (selector, value) => {
    const element = projectDialog.querySelector(selector);
    if (element) element.textContent = value;
  };

  document.querySelectorAll("[data-project-details]").forEach((button) => {
    button.addEventListener("click", () => {
      const details = projectDetails[button.dataset.projectDetails];
      if (!details) return;

      fillText("#dialog-title", details.title);
      fillText("#dialog-category", details.category);
      fillText("#dialog-description", details.description);
      fillText("#dialog-problem", details.problem);
      fillText("#dialog-role", `Role: ${details.role}`);

      const features = projectDialog.querySelector("#dialog-features");
      features.replaceChildren(...details.features.map((feature) => {
        const item = document.createElement("li");
        item.textContent = feature;
        return item;
      }));

      const technologies = projectDialog.querySelector("#dialog-technologies");
      technologies.replaceChildren(...details.technologies.map((technology) => {
        const item = document.createElement("span");
        item.textContent = technology;
        return item;
      }));

      const repositoryLink = projectDialog.querySelector(".dialog-footer a");
      if (repositoryLink) {
        repositoryLink.hidden = !details.repositoryUrl;
        if (details.repositoryUrl) {
          repositoryLink.href = details.repositoryUrl;
          repositoryLink.textContent = "View project repository ↗";
        }
      }

      projectDialog.showModal();
    });
  });

  projectDialog.querySelector(".dialog-close")?.addEventListener("click", () => projectDialog.close());
  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) projectDialog.close();
  });
}

const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(contactForm instanceof HTMLFormElement)) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const body = `${message}\n\nFrom: ${name}\nReply email: ${email}`;
  const mailto = `mailto:jane2030alex@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  if (contactStatus) contactStatus.textContent = "Your email app should open with this message ready to send.";
  window.location.href = mailto;
});

document.querySelector("[data-copy-email]")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const status = document.querySelector("#contact-status");
  try {
    await navigator.clipboard.writeText("jane2030alex@gmail.com");
    if (button instanceof HTMLButtonElement) button.textContent = "Email copied";
    if (status) status.textContent = "Email address copied to clipboard.";
  } catch {
    if (status) status.textContent = "Could not copy automatically. Select the email address and copy it manually.";
  }
});

const animationSnippets = {
  html: '<span class="typed-text" aria-live="polite"></span>\n<span class="typing-caret" aria-hidden="true"></span>',
  css: ".typing-caret {\n  display: inline-block;\n  width: 2px;\n  background: #a78bfa;\n  animation: blink .8s step-end infinite;\n}\n\n@keyframes blink {\n  50% { opacity: 0; }\n}",
  js: 'const roles = ["Software Engineer", "Full-Stack Developer"];\nlet roleIndex = 0;\nlet characterIndex = 0;\n\nfunction typeNextCharacter() {\n  const role = roles[roleIndex];\n  characterIndex += 1;\n  typedText.textContent = role.slice(0, characterIndex);\n  if (characterIndex < role.length) {\n    window.setTimeout(typeNextCharacter, 85);\n  }\n}',
};

const codeOutput = document.querySelector("#demo-code");
const codeStatus = document.querySelector("#code-status");
let activeSnippet = "html";

document.querySelectorAll("[data-code-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeSnippet = tab.dataset.codeTab;
    document.querySelectorAll("[data-code-tab]").forEach((item) => {
      item.setAttribute("aria-selected", String(item === tab));
    });
    if (codeOutput && animationSnippets[activeSnippet]) {
      codeOutput.textContent = animationSnippets[activeSnippet];
    }
    if (codeStatus) codeStatus.textContent = "";
  });
});

document.querySelector("#copy-code")?.addEventListener("click", async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(animationSnippets[activeSnippet]);
    if (button instanceof HTMLButtonElement) button.textContent = "Copied";
    if (codeStatus) codeStatus.textContent = `${activeSnippet.toUpperCase()} snippet copied to clipboard.`;
    window.setTimeout(() => {
      if (button instanceof HTMLButtonElement) button.textContent = "Copy snippet";
    }, 1800);
  } catch {
    if (codeStatus) codeStatus.textContent = "Could not copy automatically. Select the code and copy it manually.";
  }
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const typingTargets = [document.querySelector("#typed-text"), document.querySelector("#demo-typed")].filter(Boolean);
const roles = ["Software Engineer", "Full-Stack Developer", "Computer Science Student", "Technology Enthusiast"];

if (typingTargets.length) {
  let roleIndex = 0;
  let characterIndex = roles[0].length;
  let deleting = true;

  const typeNextCharacter = () => {
    const role = roles[roleIndex];
    if (deleting) {
      characterIndex -= 1;
      if (characterIndex <= 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    } else {
      characterIndex += 1;
      if (characterIndex >= roles[roleIndex].length) {
        characterIndex = roles[roleIndex].length;
        deleting = true;
        typingTargets.forEach((target) => { target.textContent = roles[roleIndex]; });
        window.setTimeout(typeNextCharacter, 1500);
        return;
      }
    }

    typingTargets.forEach((target) => { target.textContent = roles[roleIndex].slice(0, characterIndex); });
    window.setTimeout(typeNextCharacter, deleting ? 45 : 85);
  };

  window.setTimeout(typeNextCharacter, 1500);
}

document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 12;
    card.style.transform = `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });
  card.addEventListener("pointerleave", () => { card.style.transform = ""; });
});

const meters = [...document.querySelectorAll(".meter i[data-level]")];
const animateMeters = () => {
  meters.forEach((meter) => {
    meter.style.setProperty("--meter-level", `${meter.dataset.level}%`);
    meter.classList.remove("is-filled");
    requestAnimationFrame(() => requestAnimationFrame(() => meter.classList.add("is-filled")));
  });
};

if (meters.length) {
  const meterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateMeters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.25 });
  meterObserver.observe(meters[0]);
}

document.querySelector(".replay-button")?.addEventListener("click", animateMeters);

const canvas = document.querySelector(".ambient-canvas");
const context = canvas?.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && context) {
  let width = 0;
  let height = 0;
  let particles = [];
  let frame = 0;

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(42, Math.max(16, Math.floor(width / 32)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
    }));
  };

  const drawParticles = () => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      if (!reduceMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      }

      context.beginPath();
      context.arc(particle.x, particle.y, 1.3, 0, Math.PI * 2);
      context.fillStyle = "rgba(190, 173, 255, .6)";
      context.fill();

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 115) {
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(148, 129, 210, ${0.12 * (1 - distance / 115)})`;
          context.stroke();
        }
      }
    });

    if (!reduceMotion) frame = requestAnimationFrame(drawParticles);
  };

  resizeCanvas();
  drawParticles();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
}
