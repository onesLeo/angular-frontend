import {Component, OnInit} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ReportsResponse} from './reports.response';
import {ReportsService} from './reports.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportsService]
})
export class ReportsComponent implements OnInit {
  from: NgbDateStruct;
  to: NgbDateStruct;
  date: { year: number, month: number };
  reportsRes: ReportsResponse[];
  dtOptions: any;
  isDataMoreThanZero: boolean;
  showNoDataAvailable: boolean;
  searchFormInput: FormGroup;
  type: string;

  constructor(private reportsSvc: ReportsService) {
  }

  ngOnInit(): void {
    this.searchFormInput = new FormGroup({
      fromDateForm: new FormControl('', [Validators.required]),
      toDateForm: new FormControl('', [Validators.required]),
      typeForm: new FormControl('', [Validators.required])
    });

    this.isDataMoreThanZero = false;
    this.showNoDataAvailable = false;
    this.reportsRes = [];
    this.dtOptions = {
      pageLength: 5,
      pagingType: 'full_numbers',
      processing: true,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    };
  }

  selectOfTypeOfTransactions(value: string) {
    this.type = value;
    console.log('Your type is ' + this.type);
  }

  fetchReportsData(): void {
    console.log('Trying to fetch Reports...!');
    this.reportsSvc.getAllReportsData().subscribe(
      (data) => {
        this.reportsRes = data;
        if (this.reportsRes.length > 0) {
          this.isDataMoreThanZero = true;
        }
        console.log('Length of Fetching Reports...! ' + this.reportsRes.length);
      }
    );
  }

}
