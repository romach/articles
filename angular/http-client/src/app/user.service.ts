import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public static readonly USERS_FETCH_URL = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) { }

  fetchUsers():Observable<User[]> {
    return this.http.get<User[]>(UserService.USERS_FETCH_URL);
  }
}
