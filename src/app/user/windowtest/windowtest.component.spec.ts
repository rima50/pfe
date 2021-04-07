import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowtestComponent } from './windowtest.component';

describe('WindowtestComponent', () => {
  let component: WindowtestComponent;
  let fixture: ComponentFixture<WindowtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
