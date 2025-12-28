export interface Gasto {
  id?: number;
  concepto: string;
  monto: number;
  categoria: string;
  fecha: Date | string;
  metodoPago: string;
  notas?: string;
  fechaCreacion?: Date | string;
}

export interface GastoCreate {
  concepto: string;
  monto: number;
  categoria: string;
  fecha: string; // formato ISO: YYYY-MM-DD
  metodoPago: string;
  notas?: string;
}

export interface GastoUpdate {
  concepto?: string;
  monto?: number;
  categoria?: string;
  fecha?: string;
  metodoPago?: string;
  notas?: string;
}

export interface EstadisticasGastos {
  totalGastado: number;
  cantidadGastos: number;
  promedioGasto: number;
  gastosPorCategoria: { [key: string]: number };
  gastosPorMetodoPago: { [key: string]: number };
}