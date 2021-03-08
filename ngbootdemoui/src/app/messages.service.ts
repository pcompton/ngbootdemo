import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Message} from "./message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) {

  }

  getMessage(): Observable<Message> {
    return this.http.get<Message>("/GetMessage")
  }
}
