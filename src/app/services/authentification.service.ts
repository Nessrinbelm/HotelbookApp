import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  users : AppUser[]=[];
  authenticatedUser :AppUser | undefined;
  

  constructor() {
    this.users.push({userId :Math.random(),username:"user1",password:"1234",roles:["USER"]});
    this.users.push({userId :Math.random(),username:"user2",password:"1234",roles:["USER"]});
    this.users.push({userId :Math.random(),username:"admin",password:"1234",roles:["USER , ADMIN"]});
   }
   public login(username: string , password:string):Observable<AppUser>{
       let appUser = this.users.find(u => u.username==username);
       if(!appUser) return throwError(()=> new Error("User not found"));
       if(appUser.password!=password){
        return throwError(()=> new Error("Wrong Password"));
       }
       return of(appUser);
   }

   public authenticateUser(appUser : AppUser):Observable<boolean>{
        this.authenticatedUser=appUser;
        localStorage.setItem("authUser",JSON.stringify({username:appUser.username , roles :appUser.roles , jwt:"JWT-TOKEN"}));
        return of(true);
   }

   public hasRole(role :string):boolean{
    return this.authenticatedUser!.roles.includes(role);
  }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }

  public logout():Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem('authUser');
    return of(true);
  }

}
