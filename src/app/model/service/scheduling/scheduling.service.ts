import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scheduling } from '../../interface/scheduling/scheduling';
@Injectable({
  providedIn: 'root'
})
export class SchedulingService {
  protected apiUrl = 'http://127.0.0.1:8000/api/scheduling'
  constructor(private http: HttpClient) { }
//agendamento
  getAll() {
    return this.http.get<[]>(this.apiUrl);
  }
  getByDate(date: string) {
    return this.http.get<Scheduling[]>(this.apiUrl + '/' + date);
  }

}
