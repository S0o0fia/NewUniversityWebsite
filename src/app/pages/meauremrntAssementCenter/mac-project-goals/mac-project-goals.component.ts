import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-project-goals',
  templateUrl: './mac-project-goals.component.html',
  styleUrls: ['./mac-project-goals.component.css']
})
export class MacProjectGoalsComponent implements OnInit {
  banner : any = {


		bg_image: "assets/images/about/mac.jpg",

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
