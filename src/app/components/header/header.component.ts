import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  menuItems = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        title: 'Home',
        link: '/'
      },
      {
        title: 'About',
        link: '/about'
      },
      {
        title: 'Users',
        link: '/users'
      }
    ]
  }

}
