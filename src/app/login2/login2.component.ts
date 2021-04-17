import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  data: any = {
    email: 'user1@example.com',
    password: '123abcABC',
    isRememberMe: false
  };

  origClass = '';

  constructor() { }

  ngOnInit(): void {
    this.origClass = document.body.className;
    document.body.className = 'bg-gradient-primary';
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      console.log('送出表單', form.value);
    }
  }

  ngOnDestroy(): void {
    document.body.className = this.origClass;
  }

}
