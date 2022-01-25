import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book, BookCreate } from '../models/Book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public controller = 'books';
  public endpoint = environment.apiFakeUrl;
  constructor(private http: HttpClient) { }

  list(): Observable<Book[]>{
   return this.http.get<Book[]>(`${this.endpoint}/${this.controller}`);
 }

 add(book: BookCreate){
   return this.http.post(`${this.endpoint}/${this.controller}`, book);
 }

 byId(id: string): Observable<Book> {
   const book = this.http.get<Book>(`${this.endpoint}/${this.controller}/${id}`);
   return book;
 }

 update(id: string, result: BookCreate):Observable<BookCreate> {
   const book = this.http.patch<Book>(`${this.endpoint}/${this.controller}/${id}`,result);
   return book;
 }

 remover(id: string) {
   return this.http.delete(`${this.endpoint}/${this.controller}/${id}`);
 }
}
