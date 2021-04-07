import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelivreuractiveComponent } from './listelivreuractive.component';

describe('ListelivreuractiveComponent', () => {
  let component: ListelivreuractiveComponent;
  let fixture: ComponentFixture<ListelivreuractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelivreuractiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelivreuractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
