import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-cuentas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>Mis Cuentas</h1>
      <p>Próximamente...</p>
    </div>
  `
})
export class ListaCuentasComponent {}