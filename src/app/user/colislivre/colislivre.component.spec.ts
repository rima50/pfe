import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColislivreComponent } from './colislivre.component';

describe('ColislivreComponent', () => {
  let component: ColislivreComponent;
  let fixture: ComponentFixture<ColislivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColislivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColislivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
