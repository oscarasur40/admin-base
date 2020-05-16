import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProgressComponent} from "./progress/progress.component";
import {Graficas1Component} from "./graficas1/graficas1.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";
import {IncrementadorComponent} from "../components/incrementador/incrementador.component";
import {GraficaDonaComponent} from "../components/grafica-dona/grafica-dona.component";

import {PAGES_ROUTES} from "./pages.routes";
import {FormsModule} from "@angular/forms";
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaDonaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [

    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule

  ]
})
export class PagesModule { }
