import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login-service.service';
import { User } from 'src/app/Model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  login:any = FormGroup
  
  users: User[] = [];
 
  constructor(private fb:FormBuilder, private router:Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.required]
     
    })
    this.loginService.getUsers().subscribe((data: any)=>{
      console.log(data.json());
      this.users = data.json();
    });
  }

  loginSubmit(data:any){
    console.log(data)
    if(data.email){
      this.users.forEach((item:any) => {
        if(item.name === data.email && item.password === data.password){
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home']);
        }
        else{
          localStorage.clear();
        }
        
      });
    }
  }
}
