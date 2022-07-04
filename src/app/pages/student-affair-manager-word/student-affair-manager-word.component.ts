import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-affair-manager-word',
  templateUrl: './student-affair-manager-word.component.html',
  styleUrls: ['./student-affair-manager-word.component.css']
})
export class StudentAffairManagerWordComponent implements OnInit {
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
