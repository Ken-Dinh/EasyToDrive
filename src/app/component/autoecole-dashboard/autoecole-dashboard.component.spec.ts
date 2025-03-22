import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoecoleDashboardComponent } from './autoecole-dashboard.component';

describe('AutoecoleDashboardComponent', () => {
  let component: AutoecoleDashboardComponent;
  let fixture: ComponentFixture<AutoecoleDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoecoleDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoecoleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
