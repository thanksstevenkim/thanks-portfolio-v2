export type Language = {
  name: string;
  level: string;
};

export type PersonalInfo = {
  name: string;
  role: string;
  location: string;
  languages?: Language[];
  email: string;
  github: string;
  mastodon: string;
  mastodon2: string;
  bio: string;
};

export type EducationEntry = {
  institution: string;
  location: string;
  degree: string;
  period: string;
  achievements: string[];
};

export type Skills = {
  title: string;
  icon: string;
  items: string[];
}[];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  github: string;
  description: string[];
  evidence?: ProjectLink[];
};

export type Projects = Project[];

export type Education = EducationEntry[];

export type OperationalCase = {
  title: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export type OperationalCases = OperationalCase[];

export type SectionLabels = {
  projects: string;
  operations: string;
  skills: string;
  education: string;
};

export type UiLabels = {
  lang: "ko" | "en" | "ja";
  pageTitle: string;
  pageDescription: string;
  profileAlt: string;
  menuToggle: string;
  repositoryLabel: string;
  educationHighlights: string;
  mastodonAdmin: string;
  vivaldiSocial: string;
  footerRights: string;
  footerBuiltWith: string;
  sections: SectionLabels;
};
