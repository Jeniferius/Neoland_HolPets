import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  lat: number = 51.678418;
  lon: number = 7.809007;

  lat2: number = 51.698418;
  lon2: number = 8.809007;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.mostrarAllCuidadores().then((res) => {

      for (let i = 0; i < res.json().length; i++){
        
        // $('#contenedorCards').append(`<div class="cards container mt-5"><div class="card mb-5"><div class="titulo"><h3 class="text-center">${res.json()[i].nombre} - Ciudad</h3></div><div class="row"><div class="col-3"><img src="../../assets/images/logo.png" alt="" width="100px" /></div><div class="col-9"><div class="row"><ul class="col-6"><li>Edad</li><li>Mascota preferida</li></ul><ul class="col-6"><li>Distancia</li><li>Valoraciones</li></ul></div></div></div><div class="ui bottom attached button"><i class="add icon"></i>Más información</div></div></div>`);

        // $('.cards:first').clone().appendTo('#contenedorCards');
        
      }
    });
  }

}
