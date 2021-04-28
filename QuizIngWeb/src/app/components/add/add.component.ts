import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListaUsuarios,Usuarios } from '../../interfaces/usuarios';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})


export class AddComponent implements OnInit {

  nombreCompleto:any;
  genero:any;
  pais:any;
  ciudad:any;
  ruta2:any;
  formulario: FormGroup;
  lista:Array<String>=[];


  constructor(private ruta:ActivatedRoute, private fromBuilder: FormBuilder) {

    this.formulario=this.fromBuilder.group({
        nombreCompleto:['',[Validators.required]],
        genero:['',[Validators.required]],
        pais:['',[Validators.required]],
        ciudad:['',[Validators.required]],
    });
  }
  

  ngOnInit(): void {
    this.nombreCompleto=this.formulario.get("nombreCompleto") as FormGroup;
  }

  Crear(){
    this.lista.push(this.nombreCompleto.value);
    this.lista.push(this.genero.value);
    this.lista.push(this.pais.value);
    this.lista.push(this.ciudad.value);
  }
}
