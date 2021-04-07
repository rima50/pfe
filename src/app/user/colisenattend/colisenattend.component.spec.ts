import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisenattendComponent } from './colisenattend.component';

describe('ColisenattendComponent', () => {
  let component: ColisenattendComponent;
  let fixture: ComponentFixture<ColisenattendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisenattendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisenattendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
