import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/models/Author.model';
import { Book } from 'src/app/core/models/Book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public booksList: Book[] = [];
  public authorList: Author[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNew(){}

  updateBook(id: string){}

  removeBook(id: string){}

}
