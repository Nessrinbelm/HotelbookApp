import{NgModule} from '@angular/core';
import {MatBadgeModule}  from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


@NgModule({
 imports:[
     MatBadgeModule ,
     MatButtonModule,
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatListModule,
     MatTabsModule,
     MatCardModule
     
    ],

 exports:[
    MatBadgeModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule
  
],
})

export class MaterialModule {}