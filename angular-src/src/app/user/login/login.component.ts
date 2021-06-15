import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService , private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(formData : any) : void{
    this.userService.login(formData).subscribe((x) => { 
      console.log(x);
      this.router.navigate(['/']);
    })
  }

}