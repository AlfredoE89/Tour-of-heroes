import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // 5. Inject HttpClient into the constructor
    private http:HttpClient
  ) { }

  test(): string{
    return 'success!';
  }
}