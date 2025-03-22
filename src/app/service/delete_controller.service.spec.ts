import { TestBed } from '@angular/core/testing';

import { ControllerService } from './delete_controller.service';

describe('ControllerService', () => {
  let service: ControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
