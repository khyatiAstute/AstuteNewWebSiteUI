import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AstuteWebsite';
  toggleSidebar() {
    document.body.classList.toggle('open-menu');
  }
  ngOnInit() {
    AOS.init();
  }
}
