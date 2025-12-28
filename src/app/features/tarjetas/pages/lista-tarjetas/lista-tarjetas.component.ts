import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarjetas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>Mis Tarjetas</h1>
      <p>Próximamente...</p>
    </div>
  `
})
export class ListaTarjetasComponent {}