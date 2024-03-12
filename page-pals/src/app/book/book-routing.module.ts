import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewBookComponent } from './new-book/new-book.component';
import { BooksCatalogComponent } from '../books-catalog/books-catalog.component';

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
      //     path: ':themeId',
      //     component: CurrentThemeComponent,
      // }
    ]
  },
  {
    path: 'add-book', component: NewBookComponent,
    // canActivate:[AuthActivate],
  
  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
