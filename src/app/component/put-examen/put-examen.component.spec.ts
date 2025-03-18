import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutExamenComponent } from './put-examen.component';

describe('PutExamenComponent', () => {
  let component: PutExamenComponent;
  let fixture: ComponentFixture<PutExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
