import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBookFormComponent } from './create-book-form.component';

describe('CreateBookFormComponent', () => {
  let component: CreateBookFormComponent;
  let fixture: ComponentFixture<CreateBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBookFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
