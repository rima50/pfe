import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisrtndepotComponent } from './colisrtndepot.component';

describe('ColisrtndepotComponent', () => {
  let component: ColisrtndepotComponent;
  let fixture: ComponentFixture<ColisrtndepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisrtndepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisrtndepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
