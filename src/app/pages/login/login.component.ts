import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public datas = {
    email: '',
    password: '',
  };
  send(form: NgForm) {
return
  }

}
