 import { Component } from '@angular/core';


@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.css'
})

export class WorkSectionComponent {

  projects = [
    {
      image: 'assets/Ecomm.png',
      name: 'E-commerce App'
    },
    {
      image: 'assets/type-retro.png',
      name: 'Typing Test App'
    },
    {
      image: 'assets/weather report.png',
      name: 'Weather Report App'
    },
    // add more projects as needed
  ];

  skills = [
    {
      topic: 'FRONTEND',
      names: ['HTML', 'JAVASCRIPT', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'FIGMA'],
      completionPercentage :[85,80,85,80,85,80]
    },
    {
      topic: 'OTHERS',
      names: ['C/C++', 'JAVA',  'PYTHON', 'GIT', 'DSA'],
      completionPercentage : [90,90,70,85,85]
    }
  ];
  

}



