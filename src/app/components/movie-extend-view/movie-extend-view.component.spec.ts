import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExtendViewComponent } from './movie-extend-view.component';

describe('MovieExtendViewComponent', () => {
  let component: MovieExtendViewComponent;
  let fixture: ComponentFixture<MovieExtendViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieExtendViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExtendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
