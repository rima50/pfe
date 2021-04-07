import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutcolisComponent } from './ajoutcolis.component';

describe('AjoutcolisComponent', () => {
  let component: AjoutcolisComponent;
  let fixture: ComponentFixture<AjoutcolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutcolisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
