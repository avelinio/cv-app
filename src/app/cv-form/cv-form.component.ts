import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  
  cvForm: FormGroup;
  workFormArray: any[] = [];

  constructor(private fb:FormBuilder) {
   
  }
 


  createForm(){
    this.cvForm = this.fb.group({
      // user personal information
      'userData': this.fb.group({
        'name': [null, Validators.required],
        'midName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'birthday': this.fb.group({
          'date': [null, Validators.required],
          'month': [null, Validators.required],
          'year': [null, Validators.required],
        }),
        'mail': [null, [Validators.required, Validators.email]],
        'location': this.fb.group({
          'country': [null, Validators.required],
          'city': [null, Validators.required],
          'address': [null, Validators.required],
        }),
        'phoneNumber': [null, Validators.required],
      }),
      //  user work experience
      'workForm': this.fb.array([this.createFormItem()]),

      
    })
  } 

  
  createFormItem(): FormGroup {
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
    const workForm = this.cvForm.get('workForm') as FormArray;
    workForm.push(this.createFormItem());
  }

  ngOnInit() {
   this.createForm();    
  }

  onSubmit(){
    console.log(this.cvForm);
  }
}
