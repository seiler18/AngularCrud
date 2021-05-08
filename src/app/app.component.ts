import { Component } from '@angular/core';
import { Documentos } from './models/documentos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  documentosArray : Documentos[]=[
    {id: 1, nombre: "Don quijote", descripcion: "libro muy bueno",
    status: "Disponible"},
    {id: 2, nombre: "Don quijote2", descripcion: "libro muy bueno",
    status: "Disponible"},
    {id: 3, nombre: "Don quijote3", descripcion: "libro muy bueno",
    status: "No disponible"},
  ];



}
