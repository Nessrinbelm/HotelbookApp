export class Booking {

    Destination : string;
    checkin : Date;
    checkout : Date;
    norooms: number;
    noadults:number;
    nochildren:number;
    nom:string;
    email:string;
    Phone: string;


    constructor(Destination?:any,checkin?:any,checkout?:any,norooms?:any,noadults?:any,
        nochildren?:any,nom?:any,email?:any,Phone?:any){
            this.Destination =Destination;
            this.checkin=checkin;
            this.checkout=checkout;
            this.norooms=norooms;
            this.noadults=noadults;
            this.nochildren=nochildren;
            this.nom=nom;
            this.email=email;
            this.Phone=Phone;
        }
}

