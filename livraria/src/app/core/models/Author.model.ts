export interface Author {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface AuthorCreate {
    email: string;
    firstName: string;
    lastName: string;
  }
  
  export interface AuthorUpdate {
    email: string;
    firstName: string;
    lastName: string;
  }
  export type Authors = Array<Author>;
  