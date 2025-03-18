import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutSimulationComponent } from './put-simulation.component';

describe('PutSimulationComponent', () => {
  let component: PutSimulationComponent;
  let fixture: ComponentFixture<PutSimulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutSimulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
