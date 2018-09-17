import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  mostrar: boolean;
  formulario: FormGroup;
  options: any;
  latitud: number;
  longitud: number;

  constructor(private usersService: UsersService, private router: Router) {
    this.options = {
      componentRestrictions: { country: 'es' }
    }

    this.formulario = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fecha_nac: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      nombre_mascota: new FormControl(''),
      raza: new FormControl(''),
      fecha_nac_mascota: new FormControl(''),
      peso: new FormControl(''),
      fotos: new FormControl(''),
      ser_cuidador: new FormControl(''),
      cuidar_tipo_mascota: new FormControl(''),
      cuidar_disponibilidad: new FormControl('')
    });
    this.formulario.controls.ser_cuidador.setValue(true);
    this.mostrar = true;
  }

  ngOnInit() { }

  @ViewChild('places') places: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    this.longitud = address.geometry.location.lng();
    this.latitud = address.geometry.location.lat();
  }

  serCuidador() {
    if (this.formulario.controls.ser_cuidador.value) this.mostrar = false;
    else this.mostrar = true;
  }

  onSubmit() {
    let info = this.formulario.value
    info.latitud = this.latitud
    info.longitud = this.longitud
    this.usersService.enviarDatosFormulario(info).then((res) => {
    });
    console.log(info);
    //volver a la home
    this.router.navigate(['/home']);
  }



}
