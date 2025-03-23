import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAvisComponent } from './page-avis.component';

describe('PageAvisComponent', () => {
  let component: PageAvisComponent;
  let fixture: ComponentFixture<PageAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAvisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
