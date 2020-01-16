import { TestBed } from '@angular/core/testing';

import { RicePlantService } from './rice-plant.service';

describe('RicePlantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RicePlantService = TestBed.get(RicePlantService);
    expect(service).toBeTruthy();
  });
});
