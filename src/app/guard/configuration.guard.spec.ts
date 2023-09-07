import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { configurationGuard } from './configuration.guard';

describe('configurationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => configurationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
