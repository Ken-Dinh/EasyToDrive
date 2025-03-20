import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAutoecoleComponent } from './login-autoecole.component';

describe('LoginAutoecoleComponent', () => {
  let component: LoginAutoecoleComponent;
  let fixture: ComponentFixture<LoginAutoecoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginAutoecoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAutoecoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
