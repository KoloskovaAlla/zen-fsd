export interface Image {
  alternate: string;
  source: string;
};

export interface Content {
  text?: string;
  image?: Image;
  email?: string;
};

export interface Link {
  content: Content;
  type: string;
  url: string;
};

export interface Title {
  content: string;
  priority: number;
};

export interface Column {
  title: Title;
  links: Link[];
};

export interface ColumnProps {
  column: Column;
};