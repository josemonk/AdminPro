import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color, LabelItem } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() title:string = 'Sin titulo';


 public doughnutChartLabels = [
    'Label1',
    'Label2',
    'Label3',
  ];

 @Input('data')doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [500, 500,100],
      backgroundColor: ['#6857e6','#009fee','#f02059'],
      },
    ],

  };

  public doughnutChartType: ChartType = 'doughnut';
}
