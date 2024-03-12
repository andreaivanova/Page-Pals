import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksCatalogComponent } from '../books-catalog/books-catalog.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  
  {
    path: 'books',
    children: [
      {
          path: '',
          pathMatch: 'full',
          component: BooksCatalogComponent,
      },
      // {
      //     path: ':bookId',
      //     component: BookDetailsComponent,
      // }
    ]
  },
  {
    path: 'add-book', component: NewBookComponent,
    // canActivate:[AuthActivate],
  
  },
  // to fix route for edit

  {
    path: 'edit-book', component: NewBookComponent,
    // canActivate:[AuthActivate],
  
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
