import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  enviarDatosFormulario(datos) {
    let url = 'http://localhost:3000/api/registro';
    return this.http.post(url, datos).toPromise();
  }
}


