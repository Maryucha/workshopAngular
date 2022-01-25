import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';


@NgModule({
  declarations: [
    AuthorComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [
    AuthorComponent,BookComponent
  ]
})
export class ViewsModule { }
