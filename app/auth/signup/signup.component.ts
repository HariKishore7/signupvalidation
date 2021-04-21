import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  RegForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z0-9]*')]),
    address:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]),

  })

  get email()
  {
    return this.RegForm.get('email')
  }
  get address()
  {
    return this.RegForm.get('address')
  }
  collectData()
  {
    console.log(this.RegForm.value)
  }

}
