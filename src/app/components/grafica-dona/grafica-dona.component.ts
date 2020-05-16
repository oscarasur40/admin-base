import {Component, Input, OnInit} from '@angular/core';
import {Label, MultiDataSet} from "ng2-charts";
import {ChartType} from "chart.js";

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {

  @Input() ChartData:Number[] = [];
  @Input() ChartLabels: string[] =[];
  @Input() ChartType: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
