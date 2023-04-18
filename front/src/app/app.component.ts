import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { AttendanceSheet, Student } from './models/attendance-sheet.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  attendanceSheet: AttendanceSheet = {} as AttendanceSheet;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAttendanceSheet();
  }
  
  getAttendanceSheet() {
    this.apiService.getAttendanceSheet().subscribe(data => this.attendanceSheet = data.attendanceSheet);
  }

  togglePresenceState(student: Student) {
    this.apiService.togglePresenceState(student).subscribe(data => console.log(data))

  }

}
