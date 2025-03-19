import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Voiture3DComponent } from './voiture3-d.component';

describe('Voiture3DComponent', () => {
  let component: Voiture3DComponent;
  let fixture: ComponentFixture<Voiture3DComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Voiture3DComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Voiture3DComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
