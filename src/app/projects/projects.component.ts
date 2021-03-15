import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: object[] = [{
                         'img': 'piri.png',
                         'title': 'Piri - Find Your Place',
                         'description': 'This was my group project when I was learning to code. We used Java MVC architecture'+ 
                                        ' to build .',
                         'technologies': ['Java', 'Spring Boot', 'Thymeleaf', 'Hibernate', 'MySQL', 'JavaScript','Bootstrap', 'HTML', 'CSS'],
                         'github': 'https://github.com/LaunchCodeLiftoffProjects/Piri/tree/working-develop',
                         'live': ''              
                        },
                        {
                          'img': 'gorkha-removals.png',
                          'title': 'Gorkha Removals - A Moving Company',
                          'description': 'It is a single page webpage.',
                          'technologies': ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
                          'github': 'https://github.com/milan-shrestha/gorkha-removals/tree/develop',
                          'live': 'https://milan-shrestha.github.io/gorkha-removals/'
                        }
                      ];

  constructor() { }

  ngOnInit(): void {
  }

}
