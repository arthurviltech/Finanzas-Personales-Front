import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTarjeta } from './detalle-tarjeta';

describe('DetalleTarjeta', () => {
  let component: DetalleTarjeta;
  let fixture: ComponentFixture<DetalleTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTarjeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
