import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../Services/data.service';
import { Subscription, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  headers: string[] = [];
  data: any[] = [];
  pageSize = 5;
  currentPage = 1;

  isLoading: boolean = false;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onLoad = new EventEmitter<any>();
  @Output() onNew = new EventEmitter<any>();

  private subscriptions: Subscription[] = [];

  searchTerm: string = '';
  filteredData: any[] = [];
  constructor(private dataService: DataService, config: NgbPaginationConfig) {
    config.pageSize = this.pageSize;
  }

  async ngOnInit(): Promise<void> {

    try {
      this.isLoading = true;

      const response = await this.dataService.fetchDataFromDb();
      //this.headers = Object.keys(response[0]);
      this.headers = ["firstName", "lastName", "email"];
      this.data = response;
      this.filteredData = response;
      
      this.onLoad.emit(this.data);

      //const refreshSubscription = this.dataService.refreshData$.subscribe(
      //  (updatedData) => {
      //    this.ngOnInit();
      //  }
      //)
      //this.subscriptions.push(refreshSubscription);

      this.isLoading = false;
    }
    catch (error) {
      console.error('Error while fetching data!');
    }
  }

  ngOnDestroy(): void {
    //this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  new() {
    this.onNew.emit();
  }

  edit(row: any) {
    this.onEdit.emit(row);
  }

  delete(row: any) {
    this.onDelete.emit(row);
  }

  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.filteredData = [...this.data];
    } else {
      this.filteredData = this.data.filter(row => {
        return this.headers.some(header => {
          const cellValue = String(row[header]);
          return cellValue.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      });
    }
  }
}
