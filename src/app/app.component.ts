import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  logo: string = './assets/images/logo.png';

  ScrollIntoView(elem: string) {

    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start'});
  }
}
