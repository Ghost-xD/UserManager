import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsModel } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5020'
  constructor(private http: HttpClient) { }

  getData(pageNum: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Contacts/${pageNum}/${pageSize}`);
  }

  updateData(contact: ContactsModel): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Contacts/Update`, contact);
  }

  createData(contact: ContactsModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Contacts/Create`, contact);
  }

  deleteData(Id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Contacts/${Id}`);
  }
}
