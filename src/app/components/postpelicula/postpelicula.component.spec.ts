import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpeliculaComponent } from './postpelicula.component';

describe('PostpeliculaComponent', () => {
  let component: PostpeliculaComponent;
  let fixture: ComponentFixture<PostpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
