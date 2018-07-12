import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormArray>();
  languageForm: FormGroup; // our form model

  // we will use form builder to simplify our syntax
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.languageForm = this._fb.group({
      languages: this._fb.array([this.initForm()])
    });

    this.formReady.emit(<FormArray>this.languageForm.controls['languages']);
  }

  initForm() {
    // initialize our languages
    return this._fb.group({
      language: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required)
    });
  }

  addLanguageForm() {
    // add new language form to the list
    const control = <FormArray>this.languageForm.controls['languages'];
    const addrCtrl = this.initForm();
    control.push(addrCtrl);
  }

  removeLanguageForm(i: number) {
    // remove language form from the list
    const control = <FormArray>this.languageForm.controls['languages'];
    control.removeAt(i);
  }
}
