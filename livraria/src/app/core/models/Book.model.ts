export interface Book {
    id: string;
    name: string;
    author_uuid: string;
    createdAt:  string;
    updatedAt: string;
  }
  
  export interface BookListItem {
    id: string;
    name: string;
    author_uuid: string;
    createdAt:  string;
    updatedAt: string;
    author_name: string;
  }
  
  export interface BookCreate {
    name: string;
    author_uuid: string;
  }
  
  export type Books = Array<Book>;
  