import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsCardComponent } from './hogwarts-card.component';

describe('HogwartsCardComponent', () => {
  let component: HogwartsCardComponent;
  let fixture: ComponentFixture<HogwartsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
