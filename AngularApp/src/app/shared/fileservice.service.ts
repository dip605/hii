import {HttpClient} from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FileserviceService {

  constructor(private _http:HttpClient){}

  getXldata() {
      return this._http.get('http://localhost:3000/xlfile/getdata');
    }

}
