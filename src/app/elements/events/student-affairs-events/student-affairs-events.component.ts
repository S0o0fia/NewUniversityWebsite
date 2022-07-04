import { Component, OnInit } from '@angular/core';
import { StudentsAffairDepartmentService } from 'src/app/services/students-affair-department.service';

@Component({
  selector: 'app-student-affairs-events',
  templateUrl: './student-affairs-events.component.html',
  styleUrls: ['./student-affairs-events.component.css']
})
export class StudentAffairsEventsComponent implements OnInit {

  News : any  = [];
  baseUrl : string = 'http://luxor.edu.eg:8098/';
  constructor(private service : StudentsAffairDepartmentService) { }

  ngOnInit(): void {

  }
}
