import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisretourdefComponent } from './colisretourdef.component';

describe('ColisretourdefComponent', () => {
  let component: ColisretourdefComponent;
  let fixture: ComponentFixture<ColisretourdefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisretourdefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisretourdefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
