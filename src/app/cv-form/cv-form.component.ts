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

  constructor(private fb:FormBuilder) { }
 

  


  createSchoolFormItem(): FormGroup {
    return this.fb.group({
      'school': [null, Validators.required],
      'schoolFromYear': [null, Validators.required],
      'schoolToYear': [null, Validators.required],
      'studyArea': [null, Validators.required],
      'degree': [null, Validators.required],
      'studyDesc': [null, Validators.required]
    })

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
      // 'workForm': this.fb.array([this.createWorkFormItem()]),
      'schoolForm': this.fb.array([this.createSchoolFormItem()]),
      'language': [null, Validators.required],
      'skills':new FormArray ([
        new FormControl('', Validators.required)
      ])  
    })
  } 

  

  addSchool(): void {
    const schoolForm = this.cvForm.get('schoolForm') as FormArray;
    schoolForm.push(this.createSchoolFormItem());
  }

  addSkill(): void {
    const skill = this.cvForm.get('skills') as FormArray;
    skill.push(new FormControl('', Validators.required));
  }

  ngOnInit() {
   this.createForm();    
  }

  onSubmit(){
    console.log(this.cvForm);
  }
}
