import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-project-finance',
  templateUrl: './mac-project-finance.component.html',
  styleUrls: ['./mac-project-finance.component.css']
})
export class MacProjectFinanceComponent implements OnInit {
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
