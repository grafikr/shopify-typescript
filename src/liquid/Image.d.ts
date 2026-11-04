/**
 * Only exists nested in its parent. On its own, `{{ collection.image | json }}`
 * is just the URL string. URLs are protocol-relative.
 *
 * {{ collection | json }}
 */
export type Image = {
  created_at: string;
  alt: string | null;
  width: number;
  height: number;
  src: string;
};
