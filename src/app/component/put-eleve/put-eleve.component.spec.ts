import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutEleveComponent } from './put-eleve.component';

describe('PutEleveComponent', () => {
  let component: PutEleveComponent;
  let fixture: ComponentFixture<PutEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutEleveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
