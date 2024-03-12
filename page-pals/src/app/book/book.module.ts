import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './new-book/new-book.component';
import { BookRoutingModule } from './book-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';



@NgModule({
  declarations: [
    NewBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
