import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  public form: FormGroup;
  public submitted = false;
  public success: boolean = false;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.pattern("^([a-zA-Z]{3,}?)")]],
      lastname: ['', [Validators.required, Validators.pattern("^([a-zA-Z]{3,}?)")]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      num: ['', [Validators.required, Validators.pattern("^[0-9]{8}$")]]
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true

    if (this.form.invalid)
      return

    this.submitted = false
    this.form.reset()
    this.success = true


  }

  resetForm() {
    this.submitted = false
    this.success = false
    this.form.reset()
  }
}
