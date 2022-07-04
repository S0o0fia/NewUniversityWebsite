import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-affair-info',
  templateUrl: './student-affair-info.component.html',
  styleUrls: ['./student-affair-info.component.css']
})
export class StudentAffairInfoComponent implements OnInit {
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
