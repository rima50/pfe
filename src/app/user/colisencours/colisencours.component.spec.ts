import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisencoursComponent } from './colisencours.component';

describe('ColisencoursComponent', () => {
  let component: ColisencoursComponent;
  let fixture: ComponentFixture<ColisencoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisencoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
