import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-goals',
  templateUrl: './mac-goals.component.html',
  styleUrls: ['./mac-goals.component.css']
})
export class MacGoalsComponent implements OnInit {
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
