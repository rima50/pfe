import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisenattenteadminComponent } from './colisenattenteadmin.component';

describe('ColisenattenteadminComponent', () => {
  let component: ColisenattenteadminComponent;
  let fixture: ComponentFixture<ColisenattenteadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisenattenteadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisenattenteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
