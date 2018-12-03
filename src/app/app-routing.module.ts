import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ReadBooksComponent} from './read-books/read-books.component';
import {ReadingBooksComponent} from './reading-books/reading-books.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'reading-books',
    component: ReadingBooksComponent
  },
  {
    path: 'read-books',
    component: ReadBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
