import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarjetas } from './lista-tarjetas';

describe('ListaTarjetas', () => {
  let component: ListaTarjetas;
  let fixture: ComponentFixture<ListaTarjetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTarjetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTarjetas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
