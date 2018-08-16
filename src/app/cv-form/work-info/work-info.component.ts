import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.css']
})
export class WorkInfoComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormArray>();
  workForm: FormGroup; // our form model

  // we will use form builder to simplify our syntax
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.workForm = this._fb.group({
      works: this._fb.array([this.initForm()])
    });

    this.formReady.emit(<FormArray>this.workForm.controls['works']);
  }

  initForm() {
    // initialize our address
    return this._fb.group({
      organization: new FormControl('', Validators.required),
      fromMonth: new FormControl('', Validators.required),
      fromYear: new FormControl('', Validators.required),
      toMonth: new FormControl('', Validators.required),
      toYear: new FormControl('', Validators.required),
      jobTitle: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  addWorkForm() {
    // add new work form to the list
    const control = <FormArray>this.workForm.controls['works'];
    const addCtrl = this.initForm();
    control.push(addCtrl);
  }

  removeWorkForm(i: number) {
    // remove work form from the list
    const control = <FormArray>this.workForm.controls['works'];
    control.removeAt(i);
  }

  // get organization() { return this.workForm.get('organization'); };
  // get fromMonth() { return this.workForm.get('fromMonth'); };
  // get fromYear() { return this.workForm.get('fromYear'); };
  // get toMonth() { return this.workForm.get('toMonth'); };
  // get toYear() { return this.workForm.get('toYear'); };
  // get jobTitle() { return this.workForm.get('jobTitle'); };
  // get department() { return this.workForm.get('department'); };
  // get description() { return this.workForm.get('description'); };
  
}

