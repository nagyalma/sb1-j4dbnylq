export type AuditMode = 'geo' | 'seo';
export type Lang = 'en' | 'hu';
export type IconHint = 'search' | 'heading' | 'code' | 'sparkles' | 'target' | 'gauge';
export type ScoreColor = 'red' | 'yellow' | 'green';

export interface IssueField {
  observed_value: string;
  problem: string;
}

export interface FreeInsight {
  category: string;
  score: number;
  issue: IssueField;
  surface_fix: string;
  icon_hint: IconHint;
}

export interface LockedInsight {
  category: string;
  score: number;
  teaser: string;
  icon_hint: IconHint;
}

export interface AuditReport {
  overall_score: number;
  score_color: ScoreColor;
  headline: string;
  free_insights: FreeInsight[];
  locked_insights: LockedInsight[];
  additional_issues_count: number;
}

export interface AuditResponse {
  report?: AuditReport;
  error?: string;
}

export type AuditState = 'idle' | 'loading' | 'done' | 'error';
