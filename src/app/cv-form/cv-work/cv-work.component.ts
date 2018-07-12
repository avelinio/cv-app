import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cv-work',
  templateUrl: './cv-work.component.html',
  styleUrls: ['./cv-work.component.css']
})
export class CvWorkComponent implements OnInit {
  workForm: any[]= [];

  constructor(private fb: FormBuilder) { }

 

  createWorkFormItem(): FormGroup {
    return this.fb.group({
      'orgName': [null, Validators.required],
      'fromYear': [null, Validators.required],
      'fromMonth': [null, Validators.required],
      'toMonth': [null, Validators.required],
      'toYear': [null, Validators.required],
      'jobTitle': [null, Validators.required],
      'department': [null, Validators.required],
      'jobDescription': [null, Validators.required]
    })
  } 


  addWorkplace(): void {
    // const workForm = this.cvForm.get('workForm') as FormArray;
    this.workForm.push(this.createWorkFormItem());
  }

  ngOnInit() {
    
  }

}
