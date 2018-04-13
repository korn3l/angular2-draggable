import { Component } from '@angular/core';
import { navigation } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent {
  navItems = navigation;
}
