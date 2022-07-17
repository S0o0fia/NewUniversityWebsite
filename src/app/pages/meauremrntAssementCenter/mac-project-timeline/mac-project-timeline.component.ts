import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var handleMasonryFilter2:  any;
declare  var handleLightGallery:  any;

@Component({
  selector: 'app-mac-project-timeline',
  templateUrl: './mac-project-timeline.component.html',
  styleUrls: ['./mac-project-timeline.component.css']
})
export class MacProjectTimelineComponent implements OnInit {

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
