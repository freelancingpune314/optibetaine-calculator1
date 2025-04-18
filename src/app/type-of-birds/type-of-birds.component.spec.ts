import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfBirdsComponent } from './type-of-birds.component';

describe('TypeOfBirdsComponent', () => {
  let component: TypeOfBirdsComponent;
  let fixture: ComponentFixture<TypeOfBirdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeOfBirdsComponent]
    });
    fixture = TestBed.createComponent(TypeOfBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
