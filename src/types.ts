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
  /** External URL. When omitted, the resource is not shown in the UI. */
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
  type: "paragraph" | "heading" | "subheading" | "list" | "quote" | "callout" | "figure" | "table";
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
  /** SZZ: název bloku okruhů (podnadpis). */
  sectionTitle?: string;
  /** Má vlastní výukový obsah (ne jen osnova / placeholder). */
  available?: boolean;
  blocks?: ContentBlock[];
  resources?: Resource[];
  quiz?: Quiz;
}

/** Seskupení modulů na stránce oboru (např. Antarktida: vědy vs. kontext). */
export type ModuleSection = "veda" | "ostatni";

export interface Course {
  id: string;
  code?: string;
  title: string;
  garant?: string;
  credits?: number;
  semester?: string;
  /** Tematická sekce modulu (Speciální modul Antarktida). */
  moduleSection?: ModuleSection;
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

export interface StateExamComponent {
  type: string;
  name: string;
  form: string;
  role?: string;
  details?: Record<string, string | number>;
}

export interface StateExamTopicSection {
  title: string;
  courses?: string[];
  topics: string[];
}

export interface StateExamSubject {
  id: string;
  name: string;
  role: string;
  examPart?: string;
  description?: string;
  aliases?: string[];
  relatedCourses?: string[];
  topicsSource?: string;
  topics?: string[];
  topicSections?: StateExamTopicSection[];
  /** Archivní materiály k tomuto předmětu SZZ. */
  resources?: Resource[];
}

export interface StateExamSelectionRules {
  description: string;
  mandatory: string[];
  mandatoryElective?: {
    chooseCount: number;
    options: string[];
  };
  elective: string[];
  prerequisites?: string[];
  catalogNote?: string;
}

export interface StateExam {
  type: string;
  summary: string;
  components: StateExamComponent[];
  selectionRules: StateExamSelectionRules;
  subjects: StateExamSubject[];
  officialLinks: Resource[];
  /** Archivní a sdílené materiály ke SZZ (kromě oficiálních odkazů). */
  materials?: Resource[];
}
