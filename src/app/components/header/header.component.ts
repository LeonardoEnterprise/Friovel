import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHomeRoute: boolean | undefined;
  isMenuOpen = true;


  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomeRoute = this.router.url === '/home';
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("aaaaaaaaaaaaaaa");
    
  }
}
