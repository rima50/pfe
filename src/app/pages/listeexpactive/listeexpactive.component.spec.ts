import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeexpactiveComponent } from './listeexpactive.component';

describe('ListeexpactiveComponent', () => {
  let component: ListeexpactiveComponent;
  let fixture: ComponentFixture<ListeexpactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeexpactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeexpactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
