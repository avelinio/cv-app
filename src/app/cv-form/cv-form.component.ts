import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    jQuery('.ui.radio.checkbox')
      .checkbox();
  }

}
