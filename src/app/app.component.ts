import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  ScrollIntoView(elem: string) {

    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start'});
  }
}
