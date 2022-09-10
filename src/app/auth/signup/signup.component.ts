import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User= new User();
  userFormGroup!: FormGroup;

  constructor(private fb : FormBuilder,private UserService : UserService, private router :Router) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group({
     username: this.fb.control(null,[Validators.required,Validators.minLength(4)]),
     lastname : this.fb.control(null,[Validators.required,Validators.minLength(4)]),
     phone: this.fb.control(null,[Validators.required,Validators.minLength(10)]),
     email: this.fb.control(false,Validators.email),
     password: this.fb.control(null,[Validators.required,Validators.minLength(8)])
    });
  }


  getErrorMessage( name:string,errors:ValidationErrors){
    if ( errors ['required'] ) {
      return name+"is required " ;
    } else if ( errors [ ' minlength ' ] ) {
      return name+ "should have at least " + errors [ 'minlength' ] [ ' requiredLength ' ] + " Characters " ;
    } else return " " ;
    }

    /*handleNewUser(){
      this.UserService.CreateUser(this.user).subscribe((response)=>{
        console.log(response);
        this.user=new User();
    })
  }*/

  handleNewUser(){
    this.router.navigateByUrl('Succes');
  }

  

}
