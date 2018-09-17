import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  lat: number;
  lon: number;
  datos: any;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.usersService.mostrarAllCuidadores().then((res) => {

      this.datos = res.json();
      this.lat = res.json()[0].latitud;
      this.lon = res.json()[0].longitud;
      
    });
  }
}
