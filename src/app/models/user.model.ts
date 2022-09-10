export interface AppUser{
    userId : number;
    username : string;
    password : string;
    roles : string[];
}

export class User{
    userId : number;
    username : string;
    lastname: string;
    email:string;
    phone:string;
    password:string;


    constructor(userId?:any,username?:any,lastname?:any,email?:any,phone?:any,
        password?:any){
            this.userId =userId;
            this.username=username;
            this.lastname=lastname;
            this.email=email;
            this.phone=phone;
            this.password=password;
           
        }
}