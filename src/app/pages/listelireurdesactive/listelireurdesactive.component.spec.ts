import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelireurdesactiveComponent } from './listelireurdesactive.component';

describe('ListelireurdesactiveComponent', () => {
  let component: ListelireurdesactiveComponent;
  let fixture: ComponentFixture<ListelireurdesactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelireurdesactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelireurdesactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
