import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTestComponent } from './put-test.component';

describe('PutTestComponent', () => {
  let component: PutTestComponent;
  let fixture: ComponentFixture<PutTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PutTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
