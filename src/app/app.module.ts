import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksTableComponent } from './components/books-table/books-table.component';
import {CatalogService} from './services/catalog.service';
import { HomeComponent } from './components/home/home.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BookDetailsComponent,
    BooksTableComponent,
    HomeComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'customer-details', component: CustomerDetailsComponent},
      {path: '**', component: HomeComponent}
      ]
    )
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
