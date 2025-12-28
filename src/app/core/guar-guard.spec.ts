import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guarGuard } from './guar-guard';

describe('guarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
