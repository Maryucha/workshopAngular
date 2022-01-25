import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthorFormComponent } from './create-author-form.component';

describe('CreateAuthorFormComponent', () => {
  let component: CreateAuthorFormComponent;
  let fixture: ComponentFixture<CreateAuthorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuthorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
