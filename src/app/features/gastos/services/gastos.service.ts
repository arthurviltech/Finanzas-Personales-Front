import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, delay, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Gasto, GastoCreate, GastoUpdate, EstadisticasGastos } from '../../../core/models/gasto.model';
import { MockDataService } from '../../../core/mocks/mock-data';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private apiUrl = `${environment.apiUrl}/gastos`;
  private useMocks = environment.useMocks;
  private userId = environment.defaultUserId;

  constructor(
    private http: HttpClient,
    private mockService: MockDataService
  ) {
    console.log(`[GastosService] Modo: ${this.useMocks ? 'MOCKS' : 'API REAL'}`);
  }

  // Método auxiliar para agregar userId a los params
  private addUserIdParam(params?: HttpParams): HttpParams {
    if (!params) {
      params = new HttpParams();
    }
    return params.set('userId', this.userId.toString());
  }

  getGastos(): Observable<Gasto[]> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para getGastos');
      return this.mockService.getGastos().pipe(
        map(gastos => gastos.map(g => ({
          ...g,
          fecha: g.fecha instanceof Date ? g.fecha.toISOString().split('T')[0] : g.fecha
        })))
      );
    }

    console.log('[GastosService] Llamando API real para getGastos');
    const params = this.addUserIdParam();
    return this.http.get<Gasto[]>(this.apiUrl, { params }).pipe(
      map(gastos => gastos.map(g => ({
        ...g,
        fecha: typeof g.fecha === 'string' ? g.fecha : new Date(g.fecha).toISOString().split('T')[0]
      }))),
      catchError(error => {
        console.error('[GastosService] Error en getGastos:', error);
        return throwError(() => error);
      })
    );
  }

  getGasto(id: number): Observable<Gasto> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para getGasto');
      return this.mockService.getGasto(id);
    }

    console.log('[GastosService] Llamando API real para getGasto');
    const params = this.addUserIdParam();
    return this.http.get<Gasto>(`${this.apiUrl}/${id}`, { params }).pipe(
      catchError(error => {
        console.error('[GastosService] Error en getGasto:', error);
        return throwError(() => error);
      })
    );
  }

  getGastosByDateRange(fechaInicio: string, fechaFin: string): Observable<Gasto[]> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para getGastosByDateRange');
      // Filtrado simple en mocks
      return this.mockService.getGastos().pipe(
        map(gastos => gastos.filter(g => {
          const fecha = typeof g.fecha === 'string' ? g.fecha : g.fecha.toISOString().split('T')[0];
          return fecha >= fechaInicio && fecha <= fechaFin;
        }))
      );
    }

    console.log('[GastosService] Llamando API real para getGastosByDateRange');
    let params = this.addUserIdParam();
    params = params.set('fechaInicio', fechaInicio);
    params = params.set('fechaFin', fechaFin);
    
    return this.http.get<Gasto[]>(`${this.apiUrl}/rango-fechas`, { params }).pipe(
      catchError(error => {
        console.error('[GastosService] Error en getGastosByDateRange:', error);
        return throwError(() => error);
      })
    );
  }

  /*createGasto(gasto: GastoCreate): Observable<Gasto> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para createGasto');
      return this.mockService.createGasto(gasto as any);
    }

    console.log('[GastosService] Llamando API real para createGasto');
    const params = this.addUserIdParam();
    return this.http.post<Gasto>(this.apiUrl, gasto, { params }).pipe(
      catchError(error => {
        console.error('[GastosService] Error en createGasto:', error);
        return throwError(() => error);
      })
    );
  }*/

  updateGasto(id: number, gasto: GastoUpdate): Observable<Gasto> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para updateGasto');
      return this.mockService.updateGasto(id, gasto as any);
    }

    console.log('[GastosService] Llamando API real para updateGasto');
    const params = this.addUserIdParam();
    return this.http.put<Gasto>(`${this.apiUrl}/${id}`, gasto, { params }).pipe(
      catchError(error => {
        console.error('[GastosService] Error en updateGasto:', error);
        return throwError(() => error);
      })
    );
  }

  deleteGasto(id: number): Observable<void> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para deleteGasto');
      return this.mockService.deleteGasto(id);
    }

    console.log('[GastosService] Llamando API real para deleteGasto');
    const params = this.addUserIdParam();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { params }).pipe(
      catchError(error => {
        console.error('[GastosService] Error en deleteGasto:', error);
        return throwError(() => error);
      })
    );
  }

  getEstadisticas(): Observable<EstadisticasGastos> {
    if (this.useMocks) {
      console.log('[GastosService] Usando MOCKS para getEstadisticas');
      // Calcular estadísticas desde los mocks
      return this.mockService.getGastos().pipe(
        delay(300),
        map(gastos => {
          const total = gastos.reduce((sum, g) => sum + g.monto, 0);
          const cantidad = gastos.length;
          const promedio = cantidad > 0 ? total / cantidad : 0;

          const porCategoria: { [key: string]: number } = {};
          const porMetodoPago: { [key: string]: number } = {};

          gastos.forEach(g => {
            porCategoria[g.categoria] = (porCategoria[g.categoria] || 0) + g.monto;
            porMetodoPago[g.metodoPago] = (porMetodoPago[g.metodoPago] || 0) + g.monto;
          });

          return {
            totalGastado: total,
            cantidadGastos: cantidad,
            promedioGasto: promedio,
            gastosPorCategoria: porCategoria,
            gastosPorMetodoPago: porMetodoPago
          };
        })
      );
    }

    console.log('[GastosService] Llamando API real para getEstadisticas');
    const params = this.addUserIdParam();
    return this.http.get<EstadisticasGastos>(`${this.apiUrl}/estadisticas`, { params }).pipe(
      catchError(error => {
        console.error('[GastosService] Error en getEstadisticas:', error);
        return throwError(() => error);
      })
    );
  }
}