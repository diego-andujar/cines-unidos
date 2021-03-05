import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisfavoritosComponent } from './misfavoritos.component';

describe('MisfavoritosComponent', () => {
  let component: MisfavoritosComponent;
  let fixture: ComponentFixture<MisfavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisfavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisfavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
