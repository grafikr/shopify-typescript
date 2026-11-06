/** @liquid {{ paginate.parts | json }} */
export type PaginationPart = {
  /** A page number for page links, otherwise text like "&hellip;" or "Next &raquo;". */
  title: string | number;
  is_link: boolean;
  /** Missing for the current page and for "&hellip;". */
  url?: string;
};

/**
 * Only available inside a `{% paginate %}` block.
 *
 * @liquid {{ paginate | json }}
 */
export type Pagination = {
  current_offset: number;
  current_page: number;
  items: number;
  page_size: number;
  parts: Array<PaginationPart>;
  previous?: PaginationPart;
  next?: PaginationPart;
  pages: number;
};
