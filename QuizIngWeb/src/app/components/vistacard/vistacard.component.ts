import { Component, OnInit } from '@angular/core';
import {ListaUsuarios,Usuarios} from '../../interfaces/usuarios';

@Component({
  selector: 'app-vistacard',
  templateUrl: './vistacard.component.html',
  styleUrls: ['./vistacard.component.scss']
})
export class VistacardComponent implements OnInit {

  lista:Array<Usuarios>=ListaUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
