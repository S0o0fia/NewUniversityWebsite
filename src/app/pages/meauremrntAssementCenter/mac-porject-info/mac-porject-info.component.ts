import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-porject-info',
  templateUrl: './mac-porject-info.component.html',
  styleUrls: ['./mac-porject-info.component.css']
})
export class MacPorjectInfoComponent implements OnInit {
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
