import { BookListResult } from "./anyapi/books";

export interface IHome {
    info: number;
    books: BookListResult;
}
