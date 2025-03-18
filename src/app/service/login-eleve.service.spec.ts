import { TestBed } from '@angular/core/testing';

import { LoginEleveService } from './login-eleve.service';

describe('LoginEleveService', () => {
  let service: LoginEleveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginEleveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
