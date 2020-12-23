import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkArtsCardComponent } from './dark-arts-card.component';

describe('DarkArtsCardComponent', () => {
  let component: DarkArtsCardComponent;
  let fixture: ComponentFixture<DarkArtsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkArtsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkArtsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
