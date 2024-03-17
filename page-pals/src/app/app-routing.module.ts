import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { NewBookComponent } from './book/new-book/new-book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: 'home', component: HomeComponent
  },
  
  {
    path: 'register', component: RegisterComponent,
    
  
     
  },
  {
    path: 'login', component: LoginComponent, 
   
   
  },
  {
    path: 'books', component: BooksCatalogComponent
  },
  {
    path: 'add-book', component: NewBookComponent,  
  },
 
  // to fix route for edit
  {
    path: 'books/:_id/edit', component: EditBookComponent, 
    
  },
  {
    path: 'books/:_id', component: BookDetailsComponent
  },
  {
    path: '404',  component: NotFoundComponent
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
