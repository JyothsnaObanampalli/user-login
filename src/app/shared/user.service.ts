import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpResponse}from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl="http://localhost:64182";
  constructor(private http: HttpClient) {}

  registerUser(user : User)
  {
    const body: User={
      FirstName: user.FirstName,
      LastName:user.LastName,
      Email: user.Email,
      Password:user.Password
    }
    return this.http.post(this.rootUrl + '/api/User/Register',body);
  }
}
