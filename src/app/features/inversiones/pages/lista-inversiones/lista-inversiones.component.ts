import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-inversiones',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>Mis Inversiones</h1>
      <p>Próximamente...</p>
    </div>
  `
})
export class ListaInversionesComponent {}