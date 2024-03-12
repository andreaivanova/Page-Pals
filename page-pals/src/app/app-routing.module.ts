import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'books', component: BooksCatalogComponent
  },
  {
    path: 'add-book', component: NewBookComponent
  },
  {
    path: 'books/:bookId', component: BookDetailsComponent
  },
  {
    path: '404',  redirectTo: '/home'
  },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
