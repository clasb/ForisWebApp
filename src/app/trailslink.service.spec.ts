import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TrailslinkService } from './trailslink.service';

describe('Trailslink Service', () => {
  beforeEachProviders(() => [TrailslinkService]);

  it('should ...',
      inject([TrailslinkService], (service: TrailslinkService) => {
    expect(service).toBeTruthy();
  }));
});
