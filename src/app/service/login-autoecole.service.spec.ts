import { TestBed } from '@angular/core/testing';

import { LoginAutoecoleService } from './login-autoecole.service';

describe('LoginAutoecoleService', () => {
  let service: LoginAutoecoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAutoecoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
