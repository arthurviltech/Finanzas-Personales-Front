import { TestBed } from '@angular/core/testing';

import { Tarjetas } from './tarjetas';

describe('Tarjetas', () => {
  let service: Tarjetas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tarjetas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
