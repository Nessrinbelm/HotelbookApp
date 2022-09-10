import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css']
})
export class NavtabsComponent implements OnInit {

    btn =document.getElementById('user');
  ;

  constructor(public authService : AuthentificationService , private router :Router) { }

  ngOnInit(): void {
  }
  Authenticated(){
    if(this.authService.isAuthenticated()){
      return true;
     
    }else{
      this.btn!.style.display='none';
      return false;
    }
    
  }

  handleLogout(){
    localStorage.removeItem("authUser");
    this.authService.logout().subscribe({
       next :(data)=>{
           this.router.navigateByUrl("/signin");
       }
    });
  }


}
