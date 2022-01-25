import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookFormComponent } from './update-book-form.component';

describe('UpdateBookFormComponent', () => {
  let component: UpdateBookFormComponent;
  let fixture: ComponentFixture<UpdateBookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBookFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
