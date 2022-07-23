import{NgModule} from '@angular/core';
import {MatBadgeModule}  from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
 imports:[
     MatBadgeModule ,
     MatButtonModule,
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatListModule
    ],

 exports:[
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  
],
})

export class MaterialModule {}