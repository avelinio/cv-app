import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-education-info',
  templateUrl: './education-info.component.html',
  styleUrls: ['./education-info.component.css']
})
export class EducationInfoComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormArray>();
  educationForm: FormGroup; // our form model

  // we will use form builder to simplify our syntax
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.educationForm = this._fb.group({
      educations: this._fb.array([this.initForm()])
    });

    this.formReady.emit(<FormArray>(
      this.educationForm.controls['educations']
    ));
  }

  initForm() {
    // initialize our address
    return this._fb.group({
      school: new FormControl('', Validators.required),
      startYear: new FormControl('', Validators.required),
      endYear: new FormControl('', Validators.required),
      studyArea: new FormControl('', Validators.required),
      degree: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  addEducationForm() {
    // add new education form to the list
    const control = <FormArray>this.educationForm.controls['educations'];
    const addrCtrl = this.initForm();
    control.push(addrCtrl);
  }

  removeEducationForm(i: number) {
    // remove education form from the list
    const control = <FormArray>this.educationForm.controls['educations'];
    control.removeAt(i);
  }
}
