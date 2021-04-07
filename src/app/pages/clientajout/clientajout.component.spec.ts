import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientajoutComponent } from './clientajout.component';

describe('ClientajoutComponent', () => {
  let component: ClientajoutComponent;
  let fixture: ComponentFixture<ClientajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientajoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
