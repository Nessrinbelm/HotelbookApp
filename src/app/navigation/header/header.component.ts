import { Component, OnInit , EventEmitter,Output } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor( public authService : AuthentificationService) { }

  ngOnInit(): void {
  }

  onToggleOpenSidenav(){
    this.SideNavigationToggle.emit();

  }

}
