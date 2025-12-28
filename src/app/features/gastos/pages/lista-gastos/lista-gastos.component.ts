import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { GastosService } from '../../services/gastos.service';
import { Gasto } from '../../../../core/models/gasto.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-lista-gastos',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './lista-gastos.html',
  styleUrl: './lista-gastos.scss',
})
export class ListaGastosComponent implements OnInit {
  gastos: Gasto[] = [];
  loading = false;
  useMocks = environment.useMocks;

  constructor(
    private gastosService: GastosService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadGastos();
  }

  loadGastos(): void {
    this.loading = true;
    this.gastosService.getGastos().subscribe({
      next: (gastos) => {
        this.gastos = gastos;
        this.loading = false;
        console.log('Gastos cargados:', gastos);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al cargar gastos:', error);
        this.snackBar.open('Error al cargar gastos', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
    });
  }

  editGasto(gasto: Gasto): void {
    console.log('Editar gasto:', gasto);
    // TODO: Implementar edición
  }

  deleteGasto(gasto: Gasto): void {
    if (confirm(`¿Eliminar "${gasto.concepto}"?`)) {
      this.gastosService.deleteGasto(gasto.id!).subscribe({
        next: () => {
          this.snackBar.open('Gasto eliminado', 'Cerrar', { duration: 2000 });
          this.loadGastos();
        },
        error: (error) => {
          console.error('Error al eliminar:', error);
          this.snackBar.open('Error al eliminar gasto', 'Cerrar', { duration: 3000 });
        }
      });
    }
  }
}