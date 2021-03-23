import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  FullYear: number = new Date().getFullYear();

  faGithub = faGithub;
  faTwitter = faTwitter;
  faLinkedIn = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }

}
