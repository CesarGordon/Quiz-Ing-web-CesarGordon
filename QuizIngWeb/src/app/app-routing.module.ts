import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaUsuariosComponent} from "../app/components/lista-usuarios/lista-usuarios.component";
import {VistacardComponent} from "../app/components/vistacard/vistacard.component";
import {AddComponent} from '../app/components/add/add.component';

const routes: Routes = [
  {path:'listausuarios',component:ListaUsuariosComponent},
  {path:'perfiles',component:VistacardComponent},
  {path:'agregarusuario',component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
