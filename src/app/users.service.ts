import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  enviarDatosFormulario(datos) {
    let urlRegistro = 'http://localhost:3000/api/registro'
    return this.http.post(urlRegistro, datos).toPromise();
  }

  loginUsuario(datos) {
    let urlUsuarios = 'http://localhost:3000/api/usuarios'
    return this.http.post(urlUsuarios, datos).toPromise();
  }

  mostrarAllCuidadores() {
    let urlBuscador = 'http://localhost:3000/api/buscador'
    return this.http.get(urlBuscador).toPromise();
  }


  

}


