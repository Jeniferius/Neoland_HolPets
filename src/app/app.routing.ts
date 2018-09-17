import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SerCuidadorComponent } from "./ser-cuidador/ser-cuidador.component";
import { BuscadorComponent } from "./buscador/buscador.component";
import { RegistroComponent } from "./registro/registro.component";
import { VistaCuidadorComponent } from "./vista-cuidador/vista-cuidador.component";
import { PerfilComponent } from "./perfil/perfil.component";
import { MensajesComponent } from "./mensajes/mensajes.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'serCuidador', component: SerCuidadorComponent },
    { path: 'buscador', component: BuscadorComponent },
    { path: 'informacionCuidador/:id', component: VistaCuidadorComponent },
    {
        path: 'perfil/:id', component: PerfilComponent, children:[
            { path: 'mensajes', component: MensajesComponent }
    ] }
]