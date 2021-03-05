import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadereservasComponent } from './listadereservas.component';

describe('ListadereservasComponent', () => {
  let component: ListadereservasComponent;
  let fixture: ComponentFixture<ListadereservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadereservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadereservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
