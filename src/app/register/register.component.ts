import { Component, OnInit } from '@angular/core';
import { RegisterService } from "./register.service"
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private rs: RegisterService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      NAME: this.fb.control(null, [Validators.required]),
      USERNAME: this.fb.control(null, [Validators.required]),
      EMAIL: this.fb.control(null, [Validators.required]),
      PASS: this.fb.control(null, [Validators.required])
    })
  }

  doneRegister() {
    let formValue = this.registerForm.value

    this.rs.register(formValue).subscribe(() => {
      this.route.navigateByUrl('/home')
    })
  }

}
