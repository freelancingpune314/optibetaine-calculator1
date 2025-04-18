import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDoseComponent } from './calculate-dose.component';

describe('CalculateDoseComponent', () => {
  let component: CalculateDoseComponent;
  let fixture: ComponentFixture<CalculateDoseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateDoseComponent]
    });
    fixture = TestBed.createComponent(CalculateDoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
