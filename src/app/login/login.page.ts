import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

   username: string="";
   password: string="";
   
  constructor(private router:Router) { }

  ngOnInit() {
    this.username="superadmin";
    this.password="12345678";
  }

  checkLoginAuth(){
    //alert("username : "+this.username+"password:"+this.password)
    if (this.username=="superadmin"&& this.password=="12345678"){
      alert("anjay superatmin");
      this.router.navigateByUrl('/home',{state:
      {userRole : "superadmin"}});
    }
    if(this.username=="saufi"&& this.password=="12345"){
      alert("samlekom");
      this.router.navigateByUrl('/home',{state:
        {userRole : "admin"}});}else{
      alert("Waduh bwang")
    }
  }
}
