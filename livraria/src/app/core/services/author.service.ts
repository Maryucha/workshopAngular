import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author, AuthorCreate } from '../models/Author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  public controller = 'authors';
  public endpoint = environment.apiFakeUrl;

  constructor(private http: HttpClient) { }

  list(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.endpoint}/${this.controller}`);
  }

  add(author: AuthorCreate){
    return this.http.post(`${this.endpoint}/${this.controller}`, author);
  }

  update(id: string, author: AuthorCreate): Observable<AuthorCreate> {
    const currentAuthor = this.http.patch<Author>(`${this.endpoint}/${this.controller}/${id}`,author);
    return currentAuthor;
  }

   byId(id: string): Observable<Author> {
    const author = this.http.get<Author>(`${this.endpoint}/${this.controller}/${id}`);
    return author;
  }

  remover(id: string){
    return this.http.delete(`${this.endpoint}/${this.controller}/${id}`);
  }
}

