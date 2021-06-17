import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentList: any;

  constructor(public _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.getEmpDataList().subscribe(data => {
      if (data) {
        this.studentList = data
      }
    })
  }

}
