type Part = {
  is_link: boolean;
  title: string;
  url?: string;
};

export type Pagination = {
  current_offset: number;
  current_page: number;
  items: number;
  page_size: number;
  parts: Array<Part>;
  previous?: Part;
  next?: Part;
  pages: number;
};
