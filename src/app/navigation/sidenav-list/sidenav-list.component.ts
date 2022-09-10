import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit , EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  
  @Output() closeSideNavigation= new EventEmitter();

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  onToggleClose(){
    this.closeSideNavigation.emit();
  }


}
