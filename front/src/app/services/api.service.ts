import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AttendanceSheet, Student } from '../models/attendance-sheet.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAttendanceSheet(): Observable<{ attendanceSheet: AttendanceSheet }> {
    return this.http.get<{ attendanceSheet: AttendanceSheet }>('http://localhost:3000/attendanceSheet');
  }

  togglePresenceState(student: Student): Observable<Student> {
    return this.http.put<Student>(`http://localhost:3000/attendanceSheet/${student.id}/prensenceState`, student)
  }
}
