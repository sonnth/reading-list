import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReadingBooksComponent } from './reading-books/reading-books.component';
import { ReadBooksComponent } from './read-books/read-books.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadingBooksComponent,
    ReadBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
