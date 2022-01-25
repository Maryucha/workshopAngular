import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { BookComponent } from './components/book/book.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { 
    path:'',
    component: ShopComponent,
   },
  { 
    path:'books',
    component: BookComponent,
   },
   {
    path:'authors',
    component: AuthorComponent,
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
