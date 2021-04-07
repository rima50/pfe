import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeexpdesactiveComponent } from './listeexpdesactive.component';

describe('ListeexpdesactiveComponent', () => {
  let component: ListeexpdesactiveComponent;
  let fixture: ComponentFixture<ListeexpdesactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeexpdesactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeexpdesactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
