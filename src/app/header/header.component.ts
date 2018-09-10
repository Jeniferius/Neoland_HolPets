import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  formulario: FormGroup;

  constructor(private router: Router, private usersService: UsersService) { 
    this.formulario = new FormGroup({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() { }

  handleClickRegistro(ruta) {
    this.router.navigate([ruta]);
  }

  onSubmitLogin() {
    this.usersService.loginUsuario(this.formulario.value).then((res) => {
      //si no encuentra usuario y contraseña en la base de datos
      if (res.json() == null) {
        $('.mensajeError').css('display', 'block');
      } else { //si existe el usuario y contraseña
        $('.mensajeError').css('display', 'none');
        $('.modal .botonLogin').attr("data-dismiss", "modal");
      }
    });
  }

}
