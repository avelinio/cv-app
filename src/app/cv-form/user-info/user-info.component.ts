import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  userForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.pattern(this.emailPattern) ]),
      dateOfBirth:  new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    });

    this.formReady.emit(this.userForm);
  }

  get userName() { return this.userForm.get('userName'); };
  get middleName() { return this.userForm.get('middleName'); };
  get lastName() { return this.userForm.get('lastName'); };
  get email() { return this.userForm.get('email'); };
  get dateOfBirth() { return this.userForm.get('dateOfBirth'); };
  get country() { return this.userForm.get('country'); };
  get city() { return this.userForm.get('city'); };
  get address() { return this.userForm.get('address'); };
  get phoneNumber() { return this.userForm.get('phoneNumber'); };
}
