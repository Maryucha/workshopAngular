import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Author, AuthorCreate } from 'src/app/core/models/Author.model';
import { AuthorsService } from 'src/app/core/services/author.service';

@Component({
  selector: 'app-update-author-form',
  templateUrl: './update-author-form.component.html',
  styleUrls: ['./update-author-form.component.scss']
})
export class UpdateAuthorFormComponent implements OnInit {

  public formAuthor!: FormGroup;
  @Input() id!: string;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private authorsService: AuthorsService
  ) { }

  ngOnInit(): void {

    this.formAuthor = this.formBuilder.group({
      firstNameControl: new FormControl('', [Validators.required]),
      lastNameControl: new FormControl('', [Validators.required]),
      emailControl: new FormControl('', [Validators.required, Validators.email]),
    })
      
    this.authorsService.byId(this.id).subscribe((data)=>{
      const author: Author = data;

      this.formAuthor.patchValue({
        firstNameControl: author.firstName,
        lastNameControl: author.lastName,
        emailControl: author.email,
      })
     });
     
  }

  onSubmit() {
    try {
      let authorUpdate: AuthorCreate = {
        firstName: this.formAuthor.get('firstNameControl')?.value,
        lastName: this.formAuthor.get('lastNameControl')?.value,
        email: this.formAuthor.get('emailControl')?.value
      };
      if (this.formAuthor.valid) {
        this.activeModal.close(authorUpdate);
      }
    } catch (error) {
      console.log(error)
    }
  }
}
