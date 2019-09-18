import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Servicios


//rutas
import {APP_ROUTING} from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';

import { CardsComponent } from './components/shared/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistaComponent } from './components/artista/artista.component';


//pipes
import { NoImagePipe } from './pipes/no-image.pipe';
import {DomseguroPipe} from './pipes/domseguro.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    NoImagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent,
    ArtistaComponent,
   
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
