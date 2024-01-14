import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactsModel } from '../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../Services/data.service';
import { ApiService } from '../Services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  editForm!: FormGroup;

  isLoading: boolean = false;

  @Input() contact: ContactsModel = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };

  @Output() saveChanges = new EventEmitter<any>();
  @Output() cancelEdit = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    //this.route.params.subscribe(params => {

    //  const rowId = +params["id"];

    //  const rowData = this.dataService.getDataById(rowId);

    //  this.contact = { ...this.contact, ...rowData };
      
    //});    
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      email: [this.contact.email, [Validators.required, Validators.email]],
    });
  }

  onSave() {
    if (this.editForm.valid) {
      const formValues = this.editForm.value;
      const contactData = {
        id: this.contact.id,
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email
      }
      this.saveChanges.emit(contactData);      
    }
  }

  onCancel() {
    this.cancelEdit.emit();
    //this.router.navigate(['user']);
  }
}
