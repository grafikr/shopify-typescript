type PaginationPart = {
  is_link: boolean;
  title: string;
  url?: string;
};

export default interface Pagination {
  current_offset: number;
  current_page: number;
  items: number;
  previous?: PaginationPart;
  next?: PaginationPart;
  page_size: number;
  pages: number;
  parts: PaginationPart[];
}
