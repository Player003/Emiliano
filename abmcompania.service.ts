import { HttpClient } from '@angular/common/http';
import { DataService } from '../common/data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbmcompaniaService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:53043/api/companies/')
   }
}
