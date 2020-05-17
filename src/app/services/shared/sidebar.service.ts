import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo:"Prisipal",
      icono:"mdi mdi-gauge",
      submenu:[
        {titulo:"Dashboard", url:"/dashboard"},
        {titulo:"Progess Bar", url:"/progress"},
        {titulo:"Graficas", url:"/graficas1"}
      ]

    }
  ]

  constructor() { }
}
