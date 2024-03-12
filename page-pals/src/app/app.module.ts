import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatchpasswordsDirective } from './validators/matchpasswords.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BooksCatalogComponent,
    MatchpasswordsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BookModule,
    UserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
