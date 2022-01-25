import { ViewsRoutes } from './views-routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { ShopComponent } from './components/shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateAuthorFormComponent } from './components/author/forms/update-author-form/update-author-form.component';
import { CreateAuthorFormComponent } from './components/author/forms/create-author-form/create-author-form.component';
import { CreateBookFormComponent } from './components/book/forms/create-book-form/create-book-form.component';
import { UpdateBookFormComponent } from './components/book/forms/update-book-form/update-book-form.component';


@NgModule({
  declarations: [
    AuthorComponent,
    BookComponent,
    ShopComponent,
    UpdateAuthorFormComponent,
    CreateAuthorFormComponent,
    CreateBookFormComponent,
    UpdateBookFormComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutes,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [
    AuthorComponent,BookComponent,ShopComponent
  ]
})
export class ViewsModule { }
