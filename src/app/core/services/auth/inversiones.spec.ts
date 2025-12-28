import { TestBed } from '@angular/core/testing';

import { Inversiones } from './inversiones';

describe('Inversiones', () => {
  let service: Inversiones;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inversiones);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
