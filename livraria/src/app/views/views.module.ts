import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { ShopComponent } from './components/shop/shop.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AuthorComponent,
    BookComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [
    AuthorComponent,BookComponent,ShopComponent
  ]
})
export class ViewsModule { }
