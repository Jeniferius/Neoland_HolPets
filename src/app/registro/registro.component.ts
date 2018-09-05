import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  mostrar: boolean;
  formulario: FormGroup;
  
  constructor(private router: Router, private http: Http) { 
    this.formulario = new FormGroup({
      user: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      nacimiento: new FormControl('', [Validators.required]),
      mail: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      petNombre: new FormControl('', ),
      petRaza: new FormControl('', ),
      petNacimiento: new FormControl('', ),
      petPeso: new FormControl('', ),
      petFotos: new FormControl(''),
      serCuidador: new FormControl('')
    });
    this.formulario.controls.serCuidador.setValue(true);
    this.mostrar = true;
    
  }

  ngOnInit() {}

  enviarDatosPR() {
    let url = 'http://localhost:3000/api/registro';
    this.http.post(url, this.formulario.value).subscribe(res => {
      console.log(res.json());
    });
  }

  serCuidador() {
    if (this.formulario.controls.serCuidador.value) this.mostrar = false;
    else this.mostrar = true;
  }
}
