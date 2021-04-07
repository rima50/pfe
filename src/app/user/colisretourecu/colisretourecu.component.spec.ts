import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColisretourecuComponent } from './colisretourecu.component';

describe('ColisretourecuComponent', () => {
  let component: ColisretourecuComponent;
  let fixture: ComponentFixture<ColisretourecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColisretourecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColisretourecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
