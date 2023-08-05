import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaycardsComponent } from './playcards.component';

describe('PlaycardsComponent', () => {
  let component: PlaycardsComponent;
  let fixture: ComponentFixture<PlaycardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaycardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaycardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
