import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReportsResponse} from './reports.response';
import {InputRequest} from './input.request';

@Injectable()
export class ReportsService {
    reportsEndpointUrl = 'http://localhost:8080/fetch-reports';
    reportsEndpointBasedOnCreatedDate = 'http://localhost:8080/report-list';

    constructor(private http: HttpClient){}

    getAllReportsData(): Observable<ReportsResponse[]>{
      return this.http.get<ReportsResponse[]>(this.reportsEndpointUrl);
    }

    getReportsBasedOnCreatedDate(inputDTO: InputRequest){
      const body = new HttpParams();
      body.append('typeRequest', inputDTO.type);
      body.append('from', inputDTO.from);
      body.append('to', inputDTO.to);

      console.log('Your body request ' + body.toString());

      return this.http.get(this.reportsEndpointBasedOnCreatedDate, {params: body});
    }
}
