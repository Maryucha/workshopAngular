import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthorCreate } from 'src/app/core/models/Author.model';

@Component({
  selector: 'app-create-author-form',
  templateUrl: './create-author-form.component.html',
  styleUrls: ['./create-author-form.component.scss']
})
export class CreateAuthorFormComponent implements OnInit {

  public formAuthor!: FormGroup;
  @Input() id!: number;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.formAuthor = this.formBuilder.group({
      firstNameControl: new FormControl('', [Validators.required]),
      lastNameControl: new FormControl('', [Validators.required]),
      emailControl: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  onSubmit() {
    try {
      let authorCreation: AuthorCreate = {
        firstName: this.formAuthor.get('firstNameControl')?.value,
        lastName: this.formAuthor.get('lastNameControl')?.value,
        email: this.formAuthor.get('emailControl')?.value,
      };
       if (this.formAuthor.valid) {
      this.activeModal.close(authorCreation);
       }
    } catch (error) {
      console.log(error)
    }
  }
}