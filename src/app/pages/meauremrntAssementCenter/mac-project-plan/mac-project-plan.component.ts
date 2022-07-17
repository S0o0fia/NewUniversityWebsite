import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
declare  var handleLightGallery:  any;

@Component({
  selector: 'app-mac-project-plan',
  templateUrl: './mac-project-plan.component.html',
  styleUrls: ['./mac-project-plan.component.css']
})
export class MacProjectPlanComponent implements OnInit {
 
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
    (function ($) {
      handleMasonryFilter2();
      handleLightGallery();
  })(jQuery);
  }

}
