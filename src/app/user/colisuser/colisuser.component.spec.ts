import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisuserComponent } from './colisuser.component';

describe('ColisuserComponent', () => {
  let component: ColisuserComponent;
  let fixture: ComponentFixture<ColisuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
