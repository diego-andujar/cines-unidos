import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapeliComponent } from './listapeli.component';

describe('ListapeliComponent', () => {
  let component: ListapeliComponent;
  let fixture: ComponentFixture<ListapeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
