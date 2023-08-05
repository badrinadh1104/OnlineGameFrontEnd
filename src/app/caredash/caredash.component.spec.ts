import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaredashComponent } from './caredash.component';

describe('CaredashComponent', () => {
  let component: CaredashComponent;
  let fixture: ComponentFixture<CaredashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaredashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaredashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
