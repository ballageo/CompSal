import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import comp_sal from '../assets/data/comp_sal.json'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
}
