import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LivroFormComponent } from './pages/livros/livro-form/livro-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LivroComponent } from './pages/livros/livro/livro.component';
import { LivroCardComponent } from './pages/livros/livro-card/livro-card.component';
import { LivroDetailComponent } from './pages/livros/livro-detail/livro-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LivroCardComponent,
    LivroFormComponent,
    HomeComponent,
    NotfoundComponent,
    LivroComponent,
    LivroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
