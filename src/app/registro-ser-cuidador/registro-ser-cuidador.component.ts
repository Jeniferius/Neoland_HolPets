import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-ser-cuidador',
  templateUrl: './registro-ser-cuidador.component.html',
  styleUrls: ['./registro-ser-cuidador.component.scss']
})
export class RegistroSerCuidadorComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(private router: Router) { 
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      edad: new FormControl('', [Validators.required]),
      direccion: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}

  enviarDatosPR() {
    console.log(this.formulario.value);
  }
}
