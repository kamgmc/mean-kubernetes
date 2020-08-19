import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers () {
      return this.http.get('http://localhost:3000').toPromise()
        .catch( err => console.log(err));
  }
}
