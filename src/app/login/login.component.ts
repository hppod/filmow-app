import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { CookieService } from "ngx-cookie-service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private ls: LoginService, private route: Router, private cs: CookieService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      USERNAME: this.fb.control(null, [Validators.required]),
      PASS: this.fb.control(null, [Validators.required])
    })
  }

  setCookieValuesLogin(username: string, accessToken: string, userId: string) {
    this.cs.set('username', username)
    this.cs.set('accessToken', accessToken)
    this.cs.set('userId', userId)
    this.cs.set('isLoggedin', 't')
  }

  login() {
    let formValue = this.loginForm.value

    this.ls.login(formValue).subscribe((response) => {

      let username = response['username']
      let accessToken = response['accessToken']
      let userId = response['id']

      this.setCookieValuesLogin(username, accessToken, userId)

      this.route.navigateByUrl('/home')
    })
  }

}
