import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisaudepotComponent } from './colisaudepot.component';

describe('ColisaudepotComponent', () => {
  let component: ColisaudepotComponent;
  let fixture: ComponentFixture<ColisaudepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisaudepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisaudepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
