import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingShirtComponent } from './training-shirt.component';

describe('TrainingShirtComponent', () => {
  let component: TrainingShirtComponent;
  let fixture: ComponentFixture<TrainingShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
