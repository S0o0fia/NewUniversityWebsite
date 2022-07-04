import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-affair-tasks',
  templateUrl: './student-affair-tasks.component.html',
  styleUrls: ['./student-affair-tasks.component.css']
})
export class StudentAffairTasksComponent implements OnInit {
  banner : any = {


		bg_image: "assets/images/about/student.jpg",

	}

  layout : any = {
		sidebar: false,
		sidebarPosition:"",
		container_class:"min-container"
	}
  constructor() { }

  ngOnInit(): void {
  }

}
