import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  cvForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.cvForm = new FormGroup({
      'fullname': new FormGroup({
            'name': new FormControl(null, Validators.required),
            'midname': new FormControl(null, Validators.required),
            'lastname': new FormControl(null, Validators.required)
          }),
      'mail': new FormControl(null, [Validators.required, Validators.email]),
      'location': new FormGroup({
            'country': new FormControl(null, Validators.required),
            'city': new FormControl(null, Validators.required),
            'address': new FormControl(null, Validators.required),
          })
    });
  }

  onSubmit(){
    console.log(this.cvForm);
  }
}
