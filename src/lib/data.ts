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
  role: "다국어 IT 지원 · 시스템 운영",
  location: "대한민국, 대전광역시",
  languages: [
    { name: "한국어", level: "모국어" },
    { name: "일본어", level: "유창 (JLPT N1)" },
    { name: "영어", level: "중상급 (TOEIC 810)" },
  ],
  email: "stevenkim0325@gmail.com",
  github: "https://github.com/thanksstevenkim",
  mastodon: "https://mustard.blog/@mustard",
  mastodon2: "https://social.vivaldi.net/@thanksstevenkim",
  bio: "2022년부터 공개 Mastodon 서비스를 운영하며 Linux, Docker Compose, Nginx, PostgreSQL, Redis 환경의 업그레이드, 장애 조사, 복구 검증과 운영 문서화를 수행해 왔습니다. 한국어·일본어·영어로 사용자와 기술 맥락을 연결하는 IT·Technical Support 및 시스템 운영 업무를 지향하며, 클라우드·인프라 운영 역량을 확장하고 있습니다.",
};

export const ui: UiLabels = {
  lang: "ko",
  pageTitle: "Steven Kim | 다국어 IT 지원 및 시스템 운영",
  pageDescription:
    "다국어 IT 지원, Technical Support, Linux 기반 서비스 운영과 기술 문서화 경험을 소개하는 Steven Kim의 포트폴리오입니다.",
  profileAlt: "Steven Kim 프로필 사진",
  menuToggle: "메뉴 열기 또는 닫기",
  repositoryLabel: "GitHub 저장소",
  educationHighlights: "학력",
  mastodonAdmin: "Mastodon 관리자 계정",
  vivaldiSocial: "Vivaldi Social",
  footerRights: "All rights reserved.",
  footerBuiltWith: "Astro와 React로 제작",
  sections: {
    projects: "주요 프로젝트",
    operations: "주요 운영 사례",
    skills: "기술 및 운영 역량",
    education: "학력",
  },
};

export const education: Education = [
  {
    institution: "한밭대학교",
    location: "대한민국, 대전광역시",
    degree: "정보통신공학과 공학사",
    period: "2017년 3월 ~ 2026년 2월",
    achievements: ["2026년 2월 졸업"],
  },
];

export const skills: Skills = [
  {
    title: "시스템 및 운영",
    icon: "🖥️",
    items: [
      "Linux (Ubuntu)",
      "Docker Compose",
      "Git / GitHub",
      "GitHub Actions",
      "Mastodon 운영",
      "장애 조사",
      "업그레이드·롤백 절차",
      "백업·복구 검증",
      "AWS / S3",
      "OVHcloud",
      "Vultr",
      "Fly.io",
      "Vercel",
    ],
  },
  {
    title: "데이터베이스 및 웹 인프라",
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
    title: "문서화 및 커뮤니케이션",
    icon: "📝",
    items: [
      "운영 Runbook",
      "장애 보고서",
      "업데이트 로그",
      "Markdown",
      "Mermaid",
      "한국어 (모국어)",
      "일본어 (JLPT N1)",
      "영어 (TOEIC 810)",
    ],
  },
  {
    title: "웹 개발",
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
      "2022년 11월부터 공개 Mastodon 서비스를 직접 운영하며 가용성, 업그레이드, 사용자 접근과 연합 상태를 관리했습니다.",
      "Ubuntu, Docker Compose, Nginx, PostgreSQL, Redis, Cloudflare 기반 환경에서 장애 원인 조사와 구성 변경을 수행했습니다.",
      "버전 업그레이드, 데이터베이스 migration, 배포 전 백업 확인, 롤백 경로와 배포 후 검증 절차를 운영했습니다.",
      "재현 가능한 runbook, incident report, update log로 원인·해결·예방 조치와 검증 결과를 기록했습니다.",
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
      "공식 Libre Wiki 서비스나 미러가 아닌, 호환성과 콘텐츠 마이그레이션을 안전하게 검증하는 staging·research 환경입니다.",
      "UTM의 Ubuntu Server에 Nginx, PHP-FPM, MariaDB, MediaWiki와 Liberty skin을 구성하고 SSH 기반으로 관리했습니다.",
      "페이지와 revision history를 소규모로 가져오며 TemplateStyles, ParserFunctions, Cite, Gadgets, CSS 의존성을 식별하고 호환 설정을 적용했습니다.",
      "MariaDB dump를 별도 테스트 데이터베이스에 복원하고 테이블을 확인해 백업의 실제 복구 가능성을 검증했습니다.",
    ],
  },
  {
    title: "thanks-wiki",
    github: "https://github.com/thanksstevenkim/thanks-wiki",
    description: [
      "개인의 관찰과 문서를 구조적으로 축적하기 위한 Astro 기반 정적 위키를 구현했습니다.",
      "TypeScript schema와 동적 route를 사용해 한국어·영어·일본어 locale별 문서 경로를 구성했습니다.",
      "Markdown 콘텐츠, notes/docs 정보 구조, 공통 레이아웃으로 읽기 중심의 문서 경험을 유지했습니다.",
      "Git과 pnpm lockfile로 콘텐츠와 빌드 구성을 버전 관리하고 Vercel에 정적 사이트를 배포했습니다.",
    ],
  },
  {
    title: "the-hitchhikers-guide-to-the-fediverse",
    github:
      "https://github.com/thanksstevenkim/the-hitchhikers-guide-to-the-fediverse",
    description: [
      "한국어권 Fediverse 인스턴스를 한 화면에서 탐색하기 위한 정적 디렉터리를 구현했습니다.",
      "HTML, CSS, JavaScript로 이름·설명 검색, 언어·플랫폼·가입 상태 필터와 통계 정렬 UI를 제공했습니다.",
      "Python 스크립트로 공개 API 통계와 peer 정보를 수집하고 ActivityPub 검증, 이상치 분리, 중간 결과 저장을 처리했습니다.",
      "스팸·비정상 도메인 필터링 결과를 로그로 남기고, 통계 갱신과 GitHub Pages 배포 workflow를 저장소에 구성했습니다.",
    ],
  },
];

export const operationalCases: OperationalCases = [
  {
    title: "Cloudflare 521과 Nginx 장애",
    summary:
      "업그레이드 후 컨테이너와 PostgreSQL은 정상인데 공개 접속이 중단된 상황에서 계층별 상태를 확인했습니다. 중복된 Nginx 설정으로 서비스가 시작되지 않은 원인을 찾아 설정 검증 후 복구하고 예방 절차를 기록했습니다.",
    href: `${mastodonLab}/blob/main/incidents/001-cloudflare-521-after-upgrade.md`,
    linkLabel: "장애 보고서 보기",
  },
  {
    title: "Elasticsearch 서비스명 불일치",
    summary:
      "업그레이드 뒤 Sidekiq의 Elasticsearch 연결과 검색·연합이 중단된 문제를 Compose 서비스명과 ES_HOST 비교로 추적했습니다. 구성 백업 후 호스트명을 수정하고 컨테이너를 재생성해 연결을 복구했습니다.",
    href: `${mastodonLab}/blob/main/incidents/002-elasticsearch-service-name.md`,
    linkLabel: "장애 보고서 보기",
  },
  {
    title: "업그레이드 migration 누락",
    summary:
      "Mastodon 4.6.2 배포 후 누락된 column과 table 오류를 migration 상태 확인으로 좁혔습니다. 필요한 database migration을 실행·검증하고 이를 표준 업그레이드 절차에 포함했습니다.",
    href: `${mastodonLab}/blob/main/incidents/007-database-migration-incomplete-after-upgrade.md`,
    linkLabel: "장애 보고서 보기",
  },
  {
    title: "Fork drift로 인한 CI 실패 복구",
    summary:
      "운영 업그레이드는 완료됐지만 보안 감사, RSpec, lint가 실패한 상태에서 동일 upstream tag의 clean worktree와 fork를 비교했습니다. 보안 수정 backport와 오래된 customization 정리 후 lint exit code 0을 확인했습니다.",
    href: `${mastodonLab}/blob/main/incidents/009-github-actions-failures-from-fork-drift.md`,
    linkLabel: "장애 보고서 보기",
  },
];
