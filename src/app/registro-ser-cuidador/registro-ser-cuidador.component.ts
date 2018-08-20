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
      modalFormNameEx: new FormControl('', Validators.required),
      modalFormEmailEx: new FormControl('', Validators.required),
      modalFormSubjectEx: new FormControl('', Validators.required),
      modalFormTextEx: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }

}
