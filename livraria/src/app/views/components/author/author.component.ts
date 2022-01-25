import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/models/Author.model';
import { Book } from 'src/app/core/models/Book.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  public booksList: Book[] = [];
  public authorList: Author[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNew(){}

  updateAuthor(id: string){}

  removeAuthor(id: string){}

}
