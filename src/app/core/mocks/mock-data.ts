// ==================== INTERFACES ====================
export interface Tarjeta {
  id: number;
  nombreTarjeta: string;
  banco: string;
  tipo: 'Crédito' | 'Débito';
  numeroUltimos4: string;
  limiteCredito?: number;
  saldoActual: number;
  fechaCorte?: number;
  fechaPago?: number;
  tasaInteres?: number;
}

export interface Cuenta {
  id: number;
  nombreCuenta: string;
  banco: string;
  numeroCuenta: string;
  saldoActual: number;
  tasaInteres: number;
  fechaApertura: Date;
}

export interface Inversion {
  id: number;
  tipoInversion: string;
  nombreInversion: string;
  montoInvertido: number;
  valorActual: number;
  rendimiento: number;
  fechaInversion: Date;
}

// ==================== MOCK DATA ====================

export const MOCK_GASTOS: Gasto[] = [
  {
    id: 1,
    concepto: 'Supermercado Soriana',
    monto: 1500,
    categoria: 'Alimentación',
    fecha: new Date('2024-12-24'),
    metodoPago: 'Tarjeta de Crédito',
    notas: 'Despensa semanal'
  },
  {
    id: 2,
    concepto: 'Gasolina Pemex',
    monto: 800,
    categoria: 'Transporte',
    fecha: new Date('2024-12-23'),
    metodoPago: 'Efectivo'
  },
  {
    id: 3,
    concepto: 'Netflix',
    monto: 199,
    categoria: 'Entretenimiento',
    fecha: new Date('2024-12-22'),
    metodoPago: 'Tarjeta de Débito'
  },
  {
    id: 4,
    concepto: 'Restaurante Sanborns',
    monto: 450,
    categoria: 'Alimentación',
    fecha: new Date('2024-12-21'),
    metodoPago: 'Tarjeta de Crédito'
  },
  {
    id: 5,
    concepto: 'Amazon - Libro',
    monto: 320,
    categoria: 'Educación',
    fecha: new Date('2024-12-20'),
    metodoPago: 'Tarjeta de Crédito'
  },
  {
    id: 6,
    concepto: 'Uber',
    monto: 150,
    categoria: 'Transporte',
    fecha: new Date('2024-12-19'),
    metodoPago: 'Tarjeta de Débito'
  },
  {
    id: 7,
    concepto: 'Spotify Premium',
    monto: 115,
    categoria: 'Entretenimiento',
    fecha: new Date('2024-12-18'),
    metodoPago: 'Tarjeta de Crédito'
  },
  {
    id: 8,
    concepto: 'Farmacia Guadalajara',
    monto: 280,
    categoria: 'Salud',
    fecha: new Date('2024-12-17'),
    metodoPago: 'Efectivo'
  }
];

export const MOCK_TARJETAS: Tarjeta[] = [
  {
    id: 1,
    nombreTarjeta: 'Visa Oro',
    banco: 'BBVA',
    tipo: 'Crédito',
    numeroUltimos4: '4521',
    limiteCredito: 50000,
    saldoActual: 12500,
    fechaCorte: 25,
    fechaPago: 10,
    tasaInteres: 42.5
  },
  {
    id: 2,
    nombreTarjeta: 'Mastercard Platinum',
    banco: 'Santander',
    tipo: 'Crédito',
    numeroUltimos4: '8765',
    limiteCredito: 80000,
    saldoActual: 25000,
    fechaCorte: 20,
    fechaPago: 5,
    tasaInteres: 38.9
  },
  {
    id: 3,
    nombreTarjeta: 'Tarjeta Débito',
    banco: 'Banamex',
    tipo: 'Débito',
    numeroUltimos4: '3421',
    saldoActual: 8500
  },
  {
    id: 4,
    nombreTarjeta: 'American Express Gold',
    banco: 'American Express',
    tipo: 'Crédito',
    numeroUltimos4: '9012',
    limiteCredito: 100000,
    saldoActual: 15000,
    fechaCorte: 15,
    fechaPago: 30,
    tasaInteres: 45.0
  }
];

export const MOCK_CUENTAS: Cuenta[] = [
  {
    id: 1,
    nombreCuenta: 'Cuenta de Ahorro',
    banco: 'BBVA',
    numeroCuenta: '****1234',
    saldoActual: 45000,
    tasaInteres: 2.5,
    fechaApertura: new Date('2020-03-15')
  },
  {
    id: 2,
    nombreCuenta: 'Cuenta Nómina',
    banco: 'Banamex',
    numeroCuenta: '****5678',
    saldoActual: 15000,
    tasaInteres: 0,
    fechaApertura: new Date('2019-06-01')
  },
  {
    id: 3,
    nombreCuenta: 'Cuenta Inversión',
    banco: 'Santander',
    numeroCuenta: '****9012',
    saldoActual: 30000,
    tasaInteres: 4.5,
    fechaApertura: new Date('2021-09-20')
  }
];

export const MOCK_INVERSIONES: Inversion[] = [
  {
    id: 1,
    tipoInversion: 'CETES',
    nombreInversion: 'CETES 28 días',
    montoInvertido: 10000,
    valorActual: 10150,
    rendimiento: 1.5,
    fechaInversion: new Date('2024-11-20')
  },
  {
    id: 2,
    tipoInversion: 'Fondos de Inversión',
    nombreInversion: 'Fondo GBM Rendimiento',
    montoInvertido: 25000,
    valorActual: 27500,
    rendimiento: 10.0,
    fechaInversion: new Date('2024-08-15')
  },
  {
    id: 3,
    tipoInversion: 'Acciones',
    nombreInversion: 'AAPL - Apple Inc.',
    montoInvertido: 15000,
    valorActual: 17250,
    rendimiento: 15.0,
    fechaInversion: new Date('2024-06-10')
  },
  {
    id: 4,
    tipoInversion: 'Bonos',
    nombreInversion: 'Bonos Gubernamentales',
    montoInvertido: 20000,
    valorActual: 20800,
    rendimiento: 4.0,
    fechaInversion: new Date('2024-01-05')
  }
];

// ==================== SERVICIO MOCK ====================

import { Injectable } from '@angular/core';
import { Observable, of, delay, throwError } from 'rxjs';
import { Gasto } from '../models/gasto.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  private gastos = [...MOCK_GASTOS];
  private tarjetas = [...MOCK_TARJETAS];
  private cuentas = [...MOCK_CUENTAS];
  private inversiones = [...MOCK_INVERSIONES];

  // ========== GASTOS ==========

  getGastos(): Observable<Gasto[]> {
    return of(this.gastos).pipe(delay(300));
  }

  getGasto(id: number): Observable<Gasto> {
    const gasto = this.gastos.find(g => g.id === id);
    if (!gasto) {
      return throwError(() => new Error('Gasto no encontrado')).pipe(delay(200));
    }
    return of(gasto).pipe(delay(200));
  }

  /*createGasto(gasto: Omit<Gasto, 'id'>): Observable<Gasto> {
    const newGasto: Gasto = {
      ...gasto,
      id: Math.max(...this.gastos.map(g => g.id), 0) + 1
    };
    this.gastos.unshift(newGasto);
    return of(newGasto).pipe(delay(500));
  }*/

  updateGasto(id: number, gasto: Partial<Gasto>): Observable<Gasto> {
    const index = this.gastos.findIndex(g => g.id === id);
    if (index === -1) {
      return throwError(() => new Error('Gasto no encontrado')).pipe(delay(200));
    }
    this.gastos[index] = { ...this.gastos[index], ...gasto };
    return of(this.gastos[index]).pipe(delay(500));
  }

  deleteGasto(id: number): Observable<void> {
    const index = this.gastos.findIndex(g => g.id === id);
    if (index === -1) {
      return throwError(() => new Error('Gasto no encontrado')).pipe(delay(200));
    }
    this.gastos.splice(index, 1);
    return of(void 0).pipe(delay(300));
  }

  // ========== TARJETAS ==========

  getTarjetas(): Observable<Tarjeta[]> {
    return of(this.tarjetas).pipe(delay(300));
  }

  getTarjeta(id: number): Observable<Tarjeta> {
    const tarjeta = this.tarjetas.find(t => t.id === id);
    if (!tarjeta) {
      return throwError(() => new Error('Tarjeta no encontrada')).pipe(delay(200));
    }
    return of(tarjeta).pipe(delay(200));
  }

  createTarjeta(tarjeta: Omit<Tarjeta, 'id'>): Observable<Tarjeta> {
    const newTarjeta: Tarjeta = {
      ...tarjeta,
      id: Math.max(...this.tarjetas.map(t => t.id), 0) + 1
    };
    this.tarjetas.push(newTarjeta);
    return of(newTarjeta).pipe(delay(500));
  }

  updateTarjeta(id: number, tarjeta: Partial<Tarjeta>): Observable<Tarjeta> {
    const index = this.tarjetas.findIndex(t => t.id === id);
    if (index === -1) {
      return throwError(() => new Error('Tarjeta no encontrada')).pipe(delay(200));
    }
    this.tarjetas[index] = { ...this.tarjetas[index], ...tarjeta };
    return of(this.tarjetas[index]).pipe(delay(500));
  }

  deleteTarjeta(id: number): Observable<void> {
    const index = this.tarjetas.findIndex(t => t.id === id);
    if (index === -1) {
      return throwError(() => new Error('Tarjeta no encontrada')).pipe(delay(200));
    }
    this.tarjetas.splice(index, 1);
    return of(void 0).pipe(delay(300));
  }

  // ========== CUENTAS ==========

  getCuentas(): Observable<Cuenta[]> {
    return of(this.cuentas).pipe(delay(300));
  }

  getCuenta(id: number): Observable<Cuenta> {
    const cuenta = this.cuentas.find(c => c.id === id);
    if (!cuenta) {
      return throwError(() => new Error('Cuenta no encontrada')).pipe(delay(200));
    }
    return of(cuenta).pipe(delay(200));
  }

  createCuenta(cuenta: Omit<Cuenta, 'id'>): Observable<Cuenta> {
    const newCuenta: Cuenta = {
      ...cuenta,
      id: Math.max(...this.cuentas.map(c => c.id), 0) + 1
    };
    this.cuentas.push(newCuenta);
    return of(newCuenta).pipe(delay(500));
  }

  updateCuenta(id: number, cuenta: Partial<Cuenta>): Observable<Cuenta> {
    const index = this.cuentas.findIndex(c => c.id === id);
    if (index === -1) {
      return throwError(() => new Error('Cuenta no encontrada')).pipe(delay(200));
    }
    this.cuentas[index] = { ...this.cuentas[index], ...cuenta };
    return of(this.cuentas[index]).pipe(delay(500));
  }

  deleteCuenta(id: number): Observable<void> {
    const index = this.cuentas.findIndex(c => c.id === id);
    if (index === -1) {
      return throwError(() => new Error('Cuenta no encontrada')).pipe(delay(200));
    }
    this.cuentas.splice(index, 1);
    return of(void 0).pipe(delay(300));
  }

  // ========== INVERSIONES ==========

  getInversiones(): Observable<Inversion[]> {
    return of(this.inversiones).pipe(delay(300));
  }

  getInversion(id: number): Observable<Inversion> {
    const inversion = this.inversiones.find(i => i.id === id);
    if (!inversion) {
      return throwError(() => new Error('Inversión no encontrada')).pipe(delay(200));
    }
    return of(inversion).pipe(delay(200));
  }

  createInversion(inversion: Omit<Inversion, 'id'>): Observable<Inversion> {
    const newInversion: Inversion = {
      ...inversion,
      id: Math.max(...this.inversiones.map(i => i.id), 0) + 1
    };
    this.inversiones.push(newInversion);
    return of(newInversion).pipe(delay(500));
  }

  updateInversion(id: number, inversion: Partial<Inversion>): Observable<Inversion> {
    const index = this.inversiones.findIndex(i => i.id === id);
    if (index === -1) {
      return throwError(() => new Error('Inversión no encontrada')).pipe(delay(200));
    }
    this.inversiones[index] = { ...this.inversiones[index], ...inversion };
    return of(this.inversiones[index]).pipe(delay(500));
  }

  deleteInversion(id: number): Observable<void> {
    const index = this.inversiones.findIndex(i => i.id === id);
    if (index === -1) {
      return throwError(() => new Error('Inversión no encontrada')).pipe(delay(200));
    }
    this.inversiones.splice(index, 1);
    return of(void 0).pipe(delay(300));
  }

  // ========== UTILIDADES ==========

  resetData(): void {
    this.gastos = [...MOCK_GASTOS];
    this.tarjetas = [...MOCK_TARJETAS];
    this.cuentas = [...MOCK_CUENTAS];
    this.inversiones = [...MOCK_INVERSIONES];
  }
}

export const MOCK_GASTOS_BACKEND_FORMAT: Gasto[] = [
  {
    id: 1,
    concepto: 'Supermercado Soriana',
    monto: 1500,
    categoria: 'Alimentación',
    fecha: '2024-12-24',
    metodoPago: 'Tarjeta de Crédito',
    notas: 'Despensa semanal',
    fechaCreacion: '2024-12-24T10:30:00'
  },
  {
    id: 2,
    concepto: 'Gasolina Pemex',
    monto: 800,
    categoria: 'Transporte',
    fecha: '2024-12-23',
    metodoPago: 'Efectivo',
    fechaCreacion: '2024-12-23T15:20:00'
  },
  {
    id: 3,
    concepto: 'Netflix',
    monto: 199,
    categoria: 'Entretenimiento',
    fecha: '2024-12-22',
    metodoPago: 'Tarjeta de Débito',
    fechaCreacion: '2024-12-22T09:15:00'
  },
  {
    id: 4,
    concepto: 'Restaurante Sanborns',
    monto: 450,
    categoria: 'Alimentación',
    fecha: '2024-12-21',
    metodoPago: 'Tarjeta de Crédito',
    fechaCreacion: '2024-12-21T14:30:00'
  },
  {
    id: 5,
    concepto: 'Amazon - Libro',
    monto: 320,
    categoria: 'Educación',
    fecha: '2024-12-20',
    metodoPago: 'Tarjeta de Crédito',
    fechaCreacion: '2024-12-20T11:00:00'
  }
];
