import type {
  Education,
  OperationalCases,
  PersonalInfo,
  Projects,
  Skills,
  UiLabels,
} from "./types";

const mastodonLab = "https://github.com/thanksstevenkim/mastodon-lab";

export const personalInfo: PersonalInfo = {
  name: 'Steven "thx" Kim',
  role: "Multilingual IT Support & Systems Operations",
  location: "Daejeon, South Korea",
  languages: [
    { name: "Korean", level: "Native" },
    { name: "Japanese", level: "Fluent (JLPT N1)" },
    { name: "English", level: "Upper-intermediate (TOEIC 810)" },
  ],
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@mustard",
  mastodon2: "https://social.vivaldi.net/@thanksstevenkim",
  bio: "Since 2022, I have operated a public Mastodon service across Linux, Docker Compose, Nginx, PostgreSQL, and Redis, handling upgrades, incident investigation, recovery verification, and operational documentation. I am pursuing IT and technical support and systems operations roles where I can connect users with technical context in Korean, Japanese, and English while expanding my cloud and infrastructure operations skills.",
};

export const ui: UiLabels = {
  lang: "en",
  pageTitle: "Steven Kim | Multilingual IT Support & Systems Operations",
  pageDescription:
    "Steven Kim's portfolio focused on multilingual IT support, technical support, Linux service operations, and operational documentation.",
  profileAlt: "Portrait of Steven Kim",
  menuToggle: "Open or close navigation",
  repositoryLabel: "GitHub repository",
  educationHighlights: "Education details",
  mastodonAdmin: "Mastodon administrator",
  vivaldiSocial: "Vivaldi Social",
  footerRights: "All rights reserved.",
  footerBuiltWith: "Built with Astro and React",
  sections: {
    projects: "Selected Projects",
    operations: "Selected Operational Cases",
    skills: "Skills",
    education: "Education",
  },
};

export const education: Education = [
  {
    institution: "Hanbat National University",
    location: "Daejeon, South Korea",
    degree: "Bachelor of Engineering in Information and Communication Engineering",
    period: "Mar 2017 - Feb 2026",
    achievements: ["Graduated in February 2026"],
  },
];

export const skills: Skills = [
  {
    title: "Systems & Operations",
    icon: "🖥️",
    items: [
      "Linux (Ubuntu)",
      "Docker Compose",
      "Git / GitHub",
      "GitHub Actions",
      "Mastodon Operations",
      "Incident Investigation",
      "Upgrade & Rollback Procedures",
      "Backup & Restore Testing",
      "AWS / S3",
      "OVHcloud",
      "Vultr",
      "Fly.io",
      "Vercel",
    ],
  },
  {
    title: "Databases & Web Infrastructure",
    icon: "🌐",
    items: [
      "PostgreSQL",
      "Redis",
      "MariaDB",
      "Nginx",
      "Cloudflare",
      "Elasticsearch",
      "PHP-FPM",
      "MediaWiki",
    ],
  },
  {
    title: "Documentation & Communication",
    icon: "📝",
    items: [
      "Operational Runbooks",
      "Incident Reports",
      "Update Logs",
      "Markdown",
      "Mermaid",
      "Korean (Native)",
      "Japanese (JLPT N1)",
      "English (TOEIC 810)",
    ],
  },
  {
    title: "Web Development",
    icon: "💻",
    items: [
      "Astro",
      "TypeScript",
      "JavaScript",
      "Python",
      "HTML / CSS",
      "Tailwind CSS",
      "Remix",
      "Node.js",
    ],
  },
];

export const projects: Projects = [
  {
    title: "mastodon-lab",
    github: mastodonLab,
    description: [
      "Operated a public Mastodon service since November 2022, taking responsibility for availability, upgrades, user access, and federation checks.",
      "Investigated incidents and changed configurations across Ubuntu, Docker Compose, Nginx, PostgreSQL, Redis, and Cloudflare.",
      "Ran version upgrades, database migrations, pre-deployment backup checks, rollback planning, and post-deployment validation.",
      "Recorded causes, resolutions, preventive actions, and verification results in reproducible runbooks, incident reports, and update logs.",
    ],
    evidence: [
      { label: "Runbooks", href: `${mastodonLab}/tree/main/runbooks` },
      { label: "Incidents", href: `${mastodonLab}/tree/main/incidents` },
      { label: "Update logs", href: `${mastodonLab}/tree/main/update-log` },
    ],
  },
  {
    title: "librewiki-homelab",
    github: "https://github.com/thanksstevenkim/librewiki-homelab",
    description: [
      "Built an unofficial staging and research environment—not a Libre Wiki service or mirror—to test compatibility and content migration safely.",
      "Administered Nginx, PHP-FPM, MariaDB, MediaWiki, and the Liberty skin on an Ubuntu Server VM in UTM over SSH.",
      "Imported small sets of pages and revision history, then identified and configured TemplateStyles, ParserFunctions, Cite, Gadgets, and CSS dependencies.",
      "Restored a MariaDB dump into a separate test database and checked the tables to verify that the backup was recoverable.",
    ],
  },
  {
    title: "thanks-wiki",
    github: "https://github.com/thanksstevenkim/thanks-wiki",
    description: [
      "Implemented an Astro-based static wiki for structuring and retaining personal observations and documentation.",
      "Used a TypeScript schema and dynamic routes to provide locale-specific document paths for Korean, English, and Japanese.",
      "Kept a reading-focused documentation experience through Markdown content, notes/docs information architecture, and shared layouts.",
      "Versioned content and build configuration with Git and a pnpm lockfile, and deployed the static site on Vercel.",
    ],
  },
  {
    title: "the-hitchhikers-guide-to-the-fediverse",
    github:
      "https://github.com/thanksstevenkim/the-hitchhikers-guide-to-the-fediverse",
    description: [
      "Implemented a static directory for exploring Korean-language Fediverse instances on one page.",
      "Built search, language/platform/registration filters, and statistics sorting with HTML, CSS, and JavaScript.",
      "Used Python scripts to collect public API and peer data, verify ActivityPub, separate anomalies, and save incremental results.",
      "Logged spam and abnormal-domain filtering results and included a workflow for statistics refreshes and GitHub Pages deployment.",
    ],
  },
];

export const operationalCases: OperationalCases = [
  {
    title: "Cloudflare 521 and Nginx outage",
    summary:
      "After an upgrade, the containers and PostgreSQL were healthy but the public service was unreachable. Layer-by-layer checks identified a duplicate, invalid Nginx configuration; validation and restart restored access, and preventive checks were documented.",
    href: `${mastodonLab}/blob/main/incidents/001-cloudflare-521-after-upgrade.md`,
    linkLabel: "Read incident report",
  },
  {
    title: "Elasticsearch service-name mismatch",
    summary:
      "After an upgrade, Sidekiq lost Elasticsearch connectivity and search and federation were interrupted. Comparing Compose services with ES_HOST exposed a stale hostname; the configuration was backed up, corrected, and recreated successfully.",
    href: `${mastodonLab}/blob/main/incidents/002-elasticsearch-service-name.md`,
    linkLabel: "Read incident report",
  },
  {
    title: "Missing upgrade migrations",
    summary:
      "Missing columns and tables after a Mastodon 4.6.2 deployment were narrowed down by checking migration status. Required database migrations were run and verified, then added to the standard upgrade procedure.",
    href: `${mastodonLab}/blob/main/incidents/007-database-migration-incomplete-after-upgrade.md`,
    linkLabel: "Read incident report",
  },
  {
    title: "CI recovery after fork drift",
    summary:
      "Production was upgraded, but security audit, RSpec, and lint jobs remained red. Comparing the fork with a clean worktree at the same upstream tag isolated stale customizations; security fixes were backported and lint finished with exit code 0.",
    href: `${mastodonLab}/blob/main/incidents/009-github-actions-failures-from-fork-drift.md`,
    linkLabel: "Read incident report",
  },
];
