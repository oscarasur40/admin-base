import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare function _cargarScripts();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    _cargarScripts();
  }
  ingresar(){
    this.router.navigate(['/dashboard']);
    console.log("navegar");
  }

}
