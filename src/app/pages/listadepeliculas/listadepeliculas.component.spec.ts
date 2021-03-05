import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepeliculasComponent } from './listadepeliculas.component';

describe('ListadepeliculasComponent', () => {
  let component: ListadepeliculasComponent;
  let fixture: ComponentFixture<ListadepeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadepeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadepeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
