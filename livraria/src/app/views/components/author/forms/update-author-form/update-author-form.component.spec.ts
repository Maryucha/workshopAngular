import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuthorFormComponent } from './update-author-form.component';

describe('UpdateAuthorFormComponent', () => {
  let component: UpdateAuthorFormComponent;
  let fixture: ComponentFixture<UpdateAuthorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAuthorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
