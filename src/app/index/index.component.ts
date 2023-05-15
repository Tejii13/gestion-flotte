import { ScApiService } from './../sc-api.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass'],
})
export class IndexComponent {
  public myToken: string;
  public tokenForm: FormGroup;
  public tokenIsValid: boolean;

  constructor(private formBuilder: FormBuilder, private _route: Router) {
    this.tokenForm = this.formBuilder.group({
      token: '',
    });
  }

  handleToken() {
    this.myToken = this.tokenForm.get('token')?.value;
    console.log(this.myToken.length);

    if (this.myToken.length === 3 && parseInt(this.myToken) === 103) {
      this.tokenIsValid = true;
      this._route.navigateByUrl(`/members/${this.myToken}`);
    } else {
      this.tokenIsValid = false;
    }
  }
}