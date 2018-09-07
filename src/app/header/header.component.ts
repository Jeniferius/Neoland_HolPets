import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../users.service';

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
      console.log(res.json());
    });
  }

}
