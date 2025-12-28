import { Component, Input } from '@angular/core';
import { CommonModule , CurrencyPipe, DatePipe} from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, CurrencyPipe, DatePipe],
  templateUrl: './recent-transactions.html',
  styles: [`
    table { width: 100%; }
    .ingreso { color: #4caf50; font-weight: bold; }
    .gasto { color: #f44336; font-weight: bold; }
  `]
})
export class RecentTransactionsComponent {
  @Input() transactions: any[] = [];
  displayedColumns: string[] = ['fecha', 'concepto', 'categoria', 'monto'];
}