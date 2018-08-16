import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray
} from '../../../node_modules/@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.css']
})
export class CvFormComponent implements OnInit {
  cvForm: FormGroup;
  public items: any;

  constructor(private fb: FormBuilder, private db: AngularFirestore) {}

  ngOnInit() {
    this.cvForm = this.fb.group({});
  }

  formInitialized(name: string, form: FormArray) {
    this.cvForm.setControl(name, form);
  }

  onSubmit() {
    this.items = this.db.collection('items').add(this.cvForm.value).then(() => {
      this.cvForm.reset();
    });
  }
}
