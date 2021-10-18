import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const apiKey = 'coinrankingd902c60ca511bbea2722f3b28593bd8c69a49a2eae90785a';
const httpOptions = {
  headers: new HttpHeaders({
    'x-access-token': `${apiKey}`,
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private proxyURL = 'https://cors-anywhere.herokuapp.com/';
  private baseURL = 'https://api.coinranking.com/v2/coins';

  constructor(private http: HttpClient) { }

  getData(){
    const URL = `${this.proxyURL}${this.baseURL}`;
    return this.http.get(URL, httpOptions)
             .toPromise()
             .then((data) => data);
  }
}
