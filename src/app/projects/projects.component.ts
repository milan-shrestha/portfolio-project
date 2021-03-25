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
                         'description': 'This was my group project I built during my programming course. It is an app for people looking to relocate. The app offers information about cities based on factors like cost of living, safety and security ratings, employment prospects, local education etc.',
                         'technologies': ['Java', 'Spring Boot', 'Thymeleaf', 'Hibernate', 'MySQL', 'JavaScript','Bootstrap', 'HTML', 'CSS'],
                         'github': 'https://github.com/LaunchCodeLiftoffProjects/Piri/tree/working-develop',
                         'live': ''              
                        },
                        {
                          'img': 'gorkha-removals.png',
                          'title': 'Gorkha Removals - A Moving Company',
                          'description': "This is a single page webpage I built based on my friend's business concept. It is a website for a moving company. This webpage gives general ideas about the company to the users and allow them to contact and submit forms to the owners. ",
                          'technologies': ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
                          'github': 'https://github.com/milan-shrestha/gorkha-removals/tree/develop',
                          'live': 'https://milan-shrestha.github.io/gorkha-removals/'
                        }
                      ];

  constructor() { }

  ngOnInit(): void {
  }

}
