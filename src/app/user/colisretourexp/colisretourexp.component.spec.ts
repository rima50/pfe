import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisretourexpComponent } from './colisretourexp.component';

describe('ColisretourexpComponent', () => {
  let component: ColisretourexpComponent;
  let fixture: ComponentFixture<ColisretourexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisretourexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisretourexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
