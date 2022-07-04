import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-student-affairs-counter',
  templateUrl: './student-affairs-counter.component.html',
  styleUrls: ['./student-affairs-counter.component.css']
})
export class StudentAffairsCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {

			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});

		})(jQuery);
  }

}
