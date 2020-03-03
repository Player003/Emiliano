import { TestBed } from '@angular/core/testing';

import { AbmcompaniaService } from './abmcompania.service';

describe('AbmcompaniaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbmcompaniaService = TestBed.get(AbmcompaniaService);
    expect(service).toBeTruthy();
  });
});
