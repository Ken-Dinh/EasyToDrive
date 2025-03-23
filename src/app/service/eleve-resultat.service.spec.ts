import { TestBed } from '@angular/core/testing';

import { EleveResultatService } from './eleve-resultat.service';

describe('EleveResultatService', () => {
  let service: EleveResultatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleveResultatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
