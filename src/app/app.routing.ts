import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegistroSerCuidadorComponent } from "./registro-ser-cuidador/registro-ser-cuidador.component";
import { RegistroBuscarCuidadorComponent } from "./registro-buscar-cuidador/registro-buscar-cuidador.component";
import { SerCuidadorComponent } from "./ser-cuidador/ser-cuidador.component";
import { BuscadorComponent } from "./buscador/buscador.component";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'regCuidador', component: RegistroSerCuidadorComponent },
    { path: 'regMascota', component: RegistroBuscarCuidadorComponent },
    { path: 'serCuidador', component: SerCuidadorComponent },
    { path: 'buscador', component: BuscadorComponent }
]