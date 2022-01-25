import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Author } from 'src/app/core/models/Author.model';
import { Book } from 'src/app/core/models/Book.model';
import { AuthorsService } from 'src/app/core/services/author.service';
import { BooksService } from 'src/app/core/services/book.service';
import { CreateAuthorFormComponent } from './forms/create-author-form/create-author-form.component';
import { UpdateAuthorFormComponent } from './forms/update-author-form/update-author-form.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  public booksList: Book[] = [];
  public authorList: Author[] = [];

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.booksService.list().subscribe((data) => {
      this.booksList = data;
    });
    this.authorsService.list().subscribe((data) => {
      this.authorList = data;
    });
  }

  addNew() {
    const modalRef = this.modalService.open(CreateAuthorFormComponent);

    modalRef.result
      .then((resultado) => {
        this.authorsService.add(resultado).subscribe((a) => {});
      })
      .catch((erro) => {
        console.log('modal fechado');
      });
  }

  updateAuthor(id: string) {
    const modalRef = this.modalService.open(UpdateAuthorFormComponent);
    modalRef.componentInstance.id = id;
    modalRef.result
      .then((result) => {
        this.authorsService.update(id, result).subscribe((a) => {});
      })
      .catch((e) => {
        console.log('modal fechado');
      });
  }

  removeAuthor(id: string) {
    this.authorsService.remover(id).subscribe((a) => {});
  }
}
