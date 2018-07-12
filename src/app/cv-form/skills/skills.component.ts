import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormArray,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormArray>();

  myForm: FormGroup;
  autocompleteItems = ['Javascript', 'Typescript', 'Rust', 'Go'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      skill: [['Javascript', 'Typescript', 'Rust', 'Go'], []]
    });

    this.formReady.emit(<FormArray>this.myForm.controls['skill']);
  }

  onChange(event) {
    const prev = this.myForm.get('skill').value;
    prev.push(event.target.value);
    this.myForm.get('skill').setValue(prev);
  }
}
