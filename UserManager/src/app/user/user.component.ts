import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataService } from '../Services/data.service';
import { ContactsModel } from '../interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  data: ContactsModel = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  };
  isEditing = false;
  isNew = false;
  isLoading: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private dataService: DataService) { }

  loadNew() {
    this.isNew = true;
  }

  loadData(data: any) {
    this.data = data;
  }

  editContact(data: any) {
    this.isEditing = true;
    this.data = data;
    //this.router.navigate(['/edit', data.id]);
  }

  deleteContact(row: ContactsModel) {
    this.isLoading = true;
    this.apiService.deleteData(row.id).subscribe(
      (response) => {
        this.data = response;
        this.isLoading = false;
      },
      (error) => {
        alert(error.error);
        console.log("Error while deleting record!");
        this.isLoading = false;
      }
    )
  }

  onCancel() {
    this.isEditing = false;
  }

  onCancelNew() {
    this.isNew = false;
  }

  onSaveChanges(data: ContactsModel) {
    this.isLoading = true;
    this.apiService.updateData(data).subscribe(
      () => {
        this.isLoading = false;
      },
      (error) => {
        alert(error.error);
        this.isLoading = false;
      }
    )
    this.isEditing = false;
  }

  onSaveChangesNew(data: ContactsModel) {
    this.isLoading = true;
    this.apiService.createData(data).subscribe(
      () => {
        this.isLoading = false;
      },
      (error) => {
        alert(error.error);
        this.isLoading = false;
      }
    )
    this.isNew = false;
  }
}
