import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajuste:Ajustes = {
    temaUrl:"assets/css/colors/default.css",
    tema:"defaul"
}

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
  }

  guardarAjustes(){
    console.log("Guardado en el localStorage")
    localStorage.setItem('ajustes',JSON.stringify(this.ajuste));
  }
  cargarAjustes(){
    if (localStorage.getItem('ajustes')){
      this.ajuste =  JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajuste.tema);
    }else {

      this.aplicarTema(this.ajuste.tema);
    }
  }

  aplicarTema(tema:string){
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajuste.tema = tema;
    this.ajuste.temaUrl = url;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl:string;
  tema:string;
}
