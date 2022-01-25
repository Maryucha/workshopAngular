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

export const ViewsRoutes = RouterModule.forChild(routes);
