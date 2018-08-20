import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-buscar-cuidador',
  templateUrl: './registro-buscar-cuidador.component.html',
  styleUrls: ['./registro-buscar-cuidador.component.scss']
})
export class RegistroBuscarCuidadorComponent implements OnInit {

  formulario: FormGroup;
  
  constructor(private router: Router) { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      edad: new FormControl('', [Validators.required]),
      direccion: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      tipoMascota: new FormControl('', Validators.required),
      NombreMascota: new FormControl('', Validators.required),
      razaMascota: new FormControl('', Validators.required),
      edadMascota: new FormControl('', Validators.required),
      pesoMascota: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  enviarDatosPR() {
    console.log(this.formulario.value);
  }

}
