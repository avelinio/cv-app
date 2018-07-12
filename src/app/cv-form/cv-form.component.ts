import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '../../../node_modules/@angular/forms';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  cvForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cvForm = this.fb.group({ fullName: null });
  }

  formInitialized(name: string, form: FormArray) {
    this.cvForm.setControl(name, form);
  }
}
