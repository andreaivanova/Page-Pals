import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBookComponent } from './new-book/new-book.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    NewBookComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
