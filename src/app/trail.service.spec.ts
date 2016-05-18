import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TrailService } from './trail.service';

describe('Trail Service', () => {
  beforeEachProviders(() => [TrailService]);

  it('should ...',
      inject([TrailService], (service: TrailService) => {
    expect(service).toBeTruthy();
  }));
});
