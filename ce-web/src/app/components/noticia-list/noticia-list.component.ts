import { Component, OnInit } from '@angular/core';

import {Noticia} from 'src/Clases/Noticia';



@Component({
  selector: 'demo-carousel-captions',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})

export class NoticiaListComponent implements OnInit {

  constructor() { 
    let n = new Noticia();
    n.Titulo = "Titulo de prueba";
    n.Descripcion= "Descripcion de Prueba"
    let ListaNoticias:Noticia[]=[n,n,n,n,n,n,n,n,n];
  }

  ngOnInit() {
  }

}
