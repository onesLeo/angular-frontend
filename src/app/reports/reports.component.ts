import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ReportsResponse} from './reports.response';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  from: NgbDateStruct;
  to: NgbDateStruct;
  date: {year: number, month: number};
  reportsRes: ReportsResponse[];

  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.reportsRes = [];
    this.dtOptions = {
      pageLength: 5,
      pagingType: 'full_numbers',
      processing: true,
    };
  }

  fetchReportsData(){
    console.log('Trying to fetch Reports...!');
  }

}
