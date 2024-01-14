import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';
import { ContactsModel } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private rowData: any[] = [];

  //private refreshDataSubject = new Subject<void>();
  //refreshData$ = this.refreshDataSubject.asObservable();
  constructor(private apiService: ApiService) { }

  fetchDataFromDb(): Promise<any> {
    return this.apiService.getData(0, 10).toPromise().then(response => {
      this.rowData = response;
      return this.rowData;
    }).catch(error => {
        console.error('Error while fetching data!', error);
        throw error;
      });
  }

  getDataById(id: number) {
    return this.rowData.find(item => item.id === id);
  }

  //refreshData(data: any) {
  //  this.refreshDataSubject.next(data);
  //}
}
