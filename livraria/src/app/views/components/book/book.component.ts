import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/core/models/Author.model';
import { Book } from 'src/app/core/models/Book.model';
import { AuthorsService } from 'src/app/core/services/author.service';
import { BooksService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public booksList: Book[] = [];
  public authorList: Author[] = [];

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService,
  ) { }

  ngOnInit(): void {
    this.booksService.list().subscribe((data) => {
      this.booksList = data;
    });
    this.authorsService.list().subscribe((data) => {
      this.authorList = data;
    });
  }

  addNew(){}

  updateBook(id: string){}

  removeBook(id: string){}

}
