import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-affair-goals',
  templateUrl: './students-affair-goals.component.html',
  styleUrls: ['./students-affair-goals.component.css']
})
export class StudentsAffairGoalsComponent implements OnInit {
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
