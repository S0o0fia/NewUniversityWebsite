import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
declare  var dz_rev_slider_5:  any;
@Component({
  selector: 'app-mac-slider',
  templateUrl: './mac-slider.component.html',
  styleUrls: ['./mac-slider.component.css']
})
export class MacSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($) {
      dz_rev_slider_5();
  })(jQuery);
  }

}
