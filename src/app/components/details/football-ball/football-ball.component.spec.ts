import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballBallComponent } from './football-ball.component';

describe('FootballBallComponent', () => {
  let component: FootballBallComponent;
  let fixture: ComponentFixture<FootballBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
