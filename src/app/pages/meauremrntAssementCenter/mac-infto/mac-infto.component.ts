import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-infto',
  templateUrl: './mac-infto.component.html',
  styleUrls: ['./mac-infto.component.css']
})
export class MacInftoComponent implements OnInit {

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
