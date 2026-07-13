export type ResourceKind =
  | "presentation"
  | "document"
  | "video"
  | "link"
  | "dataset"
  | "map"
  | "tool";

export interface Resource {
  kind: ResourceKind;
  title: string;
  /** External URL. When omitted, the resource is shown as a placeholder ("materiál doplníme"). */
  url?: string;
  source?: string;
  note?: string;
}

export interface QuizOption {
  text: string;
  correct: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  explanation?: string;
}

export interface Quiz {
  title: string;
  questions: QuizQuestion[];
}

/** A rich chunk of lesson content. */
export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "quote" | "callout" | "figure" | "table";
  text?: string;
  items?: string[];
  /** For callouts: an accent label such as "Zapamatuj si". */
  label?: string;
  /** For tables. */
  head?: string[];
  rows?: string[][];
}

export interface Lesson {
  id: string;
  title: string;
  summary?: string;
  /** Estimated reading/study time in minutes. */
  minutes?: number;
  blocks?: ContentBlock[];
  resources?: Resource[];
  quiz?: Quiz;
}

export interface Course {
  id: string;
  code?: string;
  title: string;
  garant?: string;
  credits?: number;
  semester?: string;
  completion?: string;
  tags?: string[];
  description: string;
  /** High level syllabus (osnova) items. */
  syllabus: string[];
  lessons: Lesson[];
  resources?: Resource[];
}

export interface Field {
  id: string;
  title: string;
  subtitle: string;
  level: "Bakalářské" | "Magisterské" | "Speciální modul";
  accent: string;
  icon: string;
  description: string;
  sourceUrl?: string;
  courses: Course[];
}
