import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApipruebaComponent } from './apiprueba.component';

describe('ApipruebaComponent', () => {
  let component: ApipruebaComponent;
  let fixture: ComponentFixture<ApipruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApipruebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApipruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
