import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  mostrar: boolean;
  formulario: FormGroup;
  
  constructor(private usersService: UsersService, private router: Router) { 
    this.formulario = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fecha_nac: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      nombre_mascota: new FormControl('', ),
      raza: new FormControl('', ),
      fecha_nac_mascota: new FormControl('', ),
      peso: new FormControl('', ),
      fotos: new FormControl(''),
      ser_cuidador: new FormControl(''),
      cuidar_tipo_mascota: new FormControl(''),
      cuidar_disponibilidad: new FormControl('')
    });
    this.formulario.controls.ser_cuidador.setValue(true);
    this.mostrar = true; 
  }

  ngOnInit() {}

  serCuidador() {
    if (this.formulario.controls.ser_cuidador.value) this.mostrar = false;
    else this.mostrar = true;
  }

  onSubmit() {
    this.usersService.enviarDatosFormulario(this.formulario.value).then((res) => {
    });
    //volver a la home
    this.router.navigate(['/home']);
  }



}
