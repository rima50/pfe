import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwivrecolisComponent } from './swivrecolis.component';

describe('SwivrecolisComponent', () => {
  let component: SwivrecolisComponent;
  let fixture: ComponentFixture<SwivrecolisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwivrecolisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwivrecolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
