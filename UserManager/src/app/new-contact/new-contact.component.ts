import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ContactsModel } from '../interface';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  myForm!: FormGroup;

  isLoading: boolean = false;

  contact: ContactsModel = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  @Output() saveNewChanges = new EventEmitter<any>();
  @Output() cancelNew = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }  

  onSave() {
    if (this.myForm.valid) {

      const formValues = this.myForm.value;
      const contactData = {
        id: this.contact.id,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email
      }
      this.saveNewChanges.emit(contactData);
    }
  }

  onCancel() {
    this.cancelNew.emit();
    //this.router.navigate(['user']);
  }
}
