import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Moment } from '../../../node_modules/moment';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.scss']
})
export class MensajesComponent implements OnInit {

  id: number;
  numeroChats: number;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
    this.activatedRoute.parent.params.subscribe((params) => {
      this.id = params.id
      this.usersService.mostrarChatporId(this.id).then((res) => {
        console.log(res.json());
        
        this.numeroChats = res.json();
      })
    })
  }
  ngOnInit() {}

}
