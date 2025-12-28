import { Component, signal } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ExpenseChartComponent } from '../components/expense-chart/expense-chart';
import { RecentTransactionsComponent } from '../components/recent-transactions/recent-transactions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, CurrencyPipe, ExpenseChartComponent, RecentTransactionsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
}