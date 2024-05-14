import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AstuteWebsite';
  // hasAdminPrivileges = false
  toggleSidebar() {
    document.body.classList.toggle('open-menu');
  }

}
