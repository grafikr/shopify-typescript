/**
 */
export type Page = {
  id: number;
  /** Null when the page has no content. */
  body_html: string | null;
  created_at: string;
  published_at: string;
  updated_at: string;
  handle: string;
  title: string;
};
