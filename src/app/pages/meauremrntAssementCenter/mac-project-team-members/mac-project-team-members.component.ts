import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mac-project-team-members',
  templateUrl: './mac-project-team-members.component.html',
  styleUrls: ['./mac-project-team-members.component.css']
})
export class MacProjectTeamMembersComponent implements OnInit {
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
