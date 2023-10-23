import { Injectable, importProvidersFrom } from '@angular/core';
import { Lesson } from '../../interface/lesson/lesson';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private apiUrl = "http://127.0.0.1:8000/api/lesson"
  constructor(private http: HttpClient) { }
  /**
   * create
   */
  public create(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.apiUrl, lesson);
  }
  public getAll(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.apiUrl);
  }
  public getLessonById(id: any) {
    return this.http.get<Lesson>(this.apiUrl + '/' + id);

  }
  public delete(id: number): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);

  }
  public update(lesson: Lesson, id: any): Observable<any> {
    return this.http.put(this.apiUrl + '/' + id, lesson);
  }
}
