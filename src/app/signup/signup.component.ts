import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import {  NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  toastr: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm)
  {
    if(form != null)
    form.reset();
    this.user={
      FirstName:'',
      LastName:'',
      Email:'',
      Password:''

    }
  }
  OnSubmit(form : NgForm)
  {
    this.userService.registerUser(form.value)
    .subscribe((data:any)=>{
      if (data.Succeeded == true)
      {
        this.resetForm(form);
        this.toastr.success('User registration successful');
      }
      else
      this.toastr.error(data.Errors[0]);
    });

  }

}
