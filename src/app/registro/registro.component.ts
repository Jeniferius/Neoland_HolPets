import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  mostrar: boolean;
  formulario: FormGroup;
  
  constructor(private router: Router) { 
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
    console.log(this.formulario.value);
  }

  serCuidador() {
    if (this.formulario.controls.serCuidador.value) this.mostrar = false;
    else this.mostrar = true;
  }
}
