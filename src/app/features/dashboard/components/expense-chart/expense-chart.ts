import { Component, Input, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-expense-chart',
  imports: [BaseChartDirective],
  templateUrl: './expense-chart.html',
  styleUrl: './expense-chart.scss',
})
export class ExpenseChartComponent {
  // Definimos el tipo de gráfica
  public doughnutChartType: ChartType = 'doughnut';

  // Datos de prueba (Mocks) siguiendo la guía
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Alimentación', 'Transporte', 'Entretenimiento', 'Vivienda'],
    datasets: [
      {
        data: [1500, 800, 199, 5000],
        backgroundColor: ['#2196F3', '#E91E63', '#4CAF50', '#FFC107'],
        hoverBackgroundColor: ['#1976D2', '#C2185B', '#388E3C', '#FFA000'],
        borderWidth: 0,
      },
    ],
  };

  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
}
