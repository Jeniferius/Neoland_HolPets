import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { RegistroSerCuidadorComponent } from './registro-ser-cuidador/registro-ser-cuidador.component';
import { RegistroBuscarCuidadorComponent } from './registro-buscar-cuidador/registro-buscar-cuidador.component';
import { SerCuidadorComponent } from './ser-cuidador/ser-cuidador.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BuscadorComponent,
    RegistroSerCuidadorComponent,
    RegistroBuscarCuidadorComponent,
    SerCuidadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
