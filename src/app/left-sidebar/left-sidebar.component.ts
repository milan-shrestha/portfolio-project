import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {

  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedIn = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
