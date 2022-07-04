import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-affair-message',
  templateUrl: './students-affair-message.component.html',
  styleUrls: ['./students-affair-message.component.css']
})
export class StudentsAffairMessageComponent implements OnInit {
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
