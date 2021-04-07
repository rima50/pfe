import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementuserComponent } from './paiementuser.component';

describe('PaiementuserComponent', () => {
  let component: PaiementuserComponent;
  let fixture: ComponentFixture<PaiementuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
