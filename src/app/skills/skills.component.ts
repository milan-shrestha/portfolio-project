import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  languages: string[] = ['javascript.png', 'java.png', 'html5.png', 'css-3.png']
  frameworks: string[] = ['spring-boot.png', 'thymeleaf.png', 'angular.png', 'bootstrap.png']
  databases: string[] = ['mysql.png']
  tools: string[] = ['git.png', 'github.png', 'vsc.png', 'intelliJ.png']

  constructor() { }

  ngOnInit(): void {
  }

}
