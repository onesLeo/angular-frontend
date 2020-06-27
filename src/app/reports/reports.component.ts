import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ReportsResponse} from './reports.response';
import {ReportsService} from './reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportsService]
})
export class ReportsComponent implements OnInit {
  from: NgbDateStruct;
  to: NgbDateStruct;
  date: {year: number, month: number};
  reportsRes: ReportsResponse[];
  dtOptions: any;
  isDataMoreThanZero: boolean ;
  showNoDataAvailable: boolean;

  constructor(private reportsSvc: ReportsService){}

  ngOnInit(): void {
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

  fetchReportsData(): void{
    console.log('Trying to fetch Reports...!');
    this.reportsSvc.getAllReportsData().subscribe(
      (data) => {
        this.reportsRes = data;
        if (this.reportsRes.length > 0){
          this.isDataMoreThanZero = true;
        }
        console.log('Length of Fetching Reports...! ' + this.reportsRes.length);
      }
    );
  }

}
