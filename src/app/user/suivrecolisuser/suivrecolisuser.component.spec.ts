import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivrecolisuserComponent } from './suivrecolisuser.component';

describe('SuivrecolisuserComponent', () => {
  let component: SuivrecolisuserComponent;
  let fixture: ComponentFixture<SuivrecolisuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuivrecolisuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivrecolisuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
