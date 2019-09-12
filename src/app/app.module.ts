import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { SerCuidadorComponent } from './ser-cuidador/ser-cuidador.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { SidebarModule } from 'ng-sidebar';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { VistaCuidadorComponent } from './vista-cuidador/vista-cuidador.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BuscadorComponent,
    SerCuidadorComponent,
    RegistroComponent,
    VistaCuidadorComponent,
    PerfilComponent,
    MensajesComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    SidebarModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvJNLOg6tu8CXWqGgKUAUZH9TsoyUj9vY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
