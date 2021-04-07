import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcolisComponent } from './editcolis.component';

describe('EditcolisComponent', () => {
  let component: EditcolisComponent;
  let fixture: ComponentFixture<EditcolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcolisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
