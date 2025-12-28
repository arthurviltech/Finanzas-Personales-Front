import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

interface SummaryCard {
  title: string;
  value: string;
  icon: string;
  color: string;
  trend?: number;
  subtitle?: string;
}

interface Transaction {
  concepto: string;
  monto: number;
  categoria: string;
  fecha: Date;
  tipo: 'gasto' | 'ingreso';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = 'Usuario';
  currentDate: Date = new Date();

  summaryCards: SummaryCard[] = [
    {
      title: 'Balance Total',
      value: '$105,500',
      icon: 'account_balance',
      color: 'primary',
      trend: 5.2,
      subtitle: '+$5,200 este mes'
    },
    {
      title: 'Gastos del Mes',
      value: '$24,500',
      icon: 'trending_down',
      color: 'warn',
      trend: -3.1,
      subtitle: 'vs mes anterior'
    },
    {
      title: 'Inversiones',
      value: '$37,500',
      icon: 'show_chart',
      color: 'accent',
      trend: 8.5,
      subtitle: '+$2,950 rendimiento'
    },
    {
      title: 'Ahorro del Mes',
      value: '$12,000',
      icon: 'savings',
      color: 'success',
      trend: 15.0,
      subtitle: 'Meta: $15,000'
    }
  ];

  recentTransactions: Transaction[] = [
    {
      concepto: 'Supermercado Soriana',
      monto: 1500,
      categoria: 'Alimentación',
      fecha: new Date('2024-12-24'),
      tipo: 'gasto'
    },
    {
      concepto: 'Nómina',
      monto: 25000,
      categoria: 'Ingreso',
      fecha: new Date('2024-12-23'),
      tipo: 'ingreso'
    },
    {
      concepto: 'Gasolina Pemex',
      monto: 800,
      categoria: 'Transporte',
      fecha: new Date('2024-12-23'),
      tipo: 'gasto'
    },
    {
      concepto: 'Netflix',
      monto: 199,
      categoria: 'Entretenimiento',
      fecha: new Date('2024-12-22'),
      tipo: 'gasto'
    },
    {
      concepto: 'Amazon',
      monto: 2500,
      categoria: 'Compras',
      fecha: new Date('2024-12-21'),
      tipo: 'gasto'
    }
  ];

  quickActions = [
    { label: 'Registrar Gasto', icon: 'add_circle', route: '/gastos/nuevo', color: 'primary' },
    { label: 'Ver Tarjetas', icon: 'credit_card', route: '/tarjetas', color: 'accent' },
    { label: 'Mis Cuentas', icon: 'account_balance', route: '/cuentas', color: 'primary' },
    { label: 'Inversiones', icon: 'trending_up', route: '/inversiones', color: 'success' }
  ];

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const user = localStorage.getItem('finanzas_user');
    if (user) {
      const userData = JSON.parse(user);
      this.userName = userData.nombre || 'Usuario';
    }
  }

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos días';
    if (hour < 19) return 'Buenas tardes';
    return 'Buenas noches';
  }

  getCategoryIcon(categoria: string): string {
    const icons: { [key: string]: string } = {
      'Alimentación': 'restaurant',
      'Transporte': 'directions_car',
      'Entretenimiento': 'movie',
      'Compras': 'shopping_bag',
      'Ingreso': 'arrow_downward',
      'Servicios': 'home',
      'Salud': 'local_hospital',
      'Educación': 'school'
    };
    return icons[categoria] || 'receipt';
  }

  formatDate(date: Date): string {
    const today = new Date();
    const txDate = new Date(date);
    
    if (txDate.toDateString() === today.toDateString()) {
      return 'Hoy';
    }
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (txDate.toDateString() === yesterday.toDateString()) {
      return 'Ayer';
    }
    
    return txDate.toLocaleDateString('es-MX', { 
      day: '2-digit', 
      month: 'short' 
    });
  }
}