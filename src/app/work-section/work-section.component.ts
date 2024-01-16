 import { Component } from '@angular/core';


@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrl: './work-section.component.css'
})

export class WorkSectionComponent {

  projects = [
    {
      image: 'assets/weather report.png',
      name: 'Weather Report App'
    },
    {
      image: 'assets/Ecomm.png',
      name: 'E-commerce App'
    },
    {
      image: 'assets/calculator.png',
      name: 'Calculator App'
    },
    // add more projects as needed
  ];

  skills = [
    {
      topic: 'FRONTEND',
      names: ['HTML', 'JAVASCRIPT', 'CSS', 'TYPESCRIPT', 'ANGULAR', 'FIGMA']
    },
    {
      topic: 'OTHERS',
      names: ['C/C++', 'GIT', 'DSA', 'PYTHON']
    }
  ];
  

}



