import { TestBed } from '@angular/core/testing';

import { CandesactiveGuard } from './candesactive.guard';

describe('CandesactiveGuard', () => {
  let guard: CandesactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandesactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
