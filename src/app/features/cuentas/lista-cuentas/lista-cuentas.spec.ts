import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentas } from './lista-cuentas';

describe('ListaCuentas', () => {
  let component: ListaCuentas;
  let fixture: ComponentFixture<ListaCuentas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCuentas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCuentas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
