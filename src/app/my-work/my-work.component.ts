import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css',
})
export class MyWorkComponent {
  projects = [
    {
      image: 'assets/calculator.png',
      gitrepo: 'https://github.com/Bhargav-Techin/calculator.git',
      name: 'Calculator App',
      icons: ["assets/🦆 icon _html 5_.png","assets/CSS3.png","assets/JavaScript.png"],
      description:
        ' A simple calculator built with HTML, CSS, and JavaScript allows users to perform basic arithmetic operations. HTML structures the calculator layout, including buttons for digits and operations. CSS styles the calculator for a user-friendly interface. JavaScript handles user interactions, performs calculations, and updates the display',
    },
    {
      image: 'assets/weather report.png',
      gitrepo: 'https://github.com/Bhargav-Techin/weather-report.git',
      name: 'Weather Report App',
      icons: ["assets/🦆 icon _html 5_.png","assets/CSS3.png","assets/JavaScript.png"],
      description:
        'The Weather Report App is a web application that provides real-time weather updates. It’s built with HTML, CSS, and JavaScript, and uses weather APIs to fetch data. Users can enter a location and the app displays the current weather conditions for that location.',
    },
    {
      image: 'assets/Ecomm.png',
      gitrepo: 'https://github.com/Bhargav-Techin/e-commerce-app.git',
      name: 'E-commerce App',
      icons: ["assets/🦆 icon _html 5_.png","assets/CSS3.png","assets/ts.jpeg","assets/angular.png"],
      description:
        'An e-commerce website built with HTML, CSS, TypeScript, Angular, and JSON Server provides a platform for online shopping. HTML and CSS structure and style the site, while TypeScript and Angular handle interactivity and dynamic content. JSON Server simulates a backend, providing endpoints for products, users, and orders. Key features include product listings, detailed product views, a shopping cart, and a checkout process. ',
    },
    {
      image: 'assets/type-retro.png',
      gitrepo: 'https://github.com/Bhargav-Techin/TypeRetro.git',
      name: 'Type Retro',
      icons: ["assets/🦆 icon _html 5_.png","assets/CSS3.png","assets/ts.jpeg","assets/angular.png","assets/google-gemini-icon.svg"],
      description:
        '  “Type Retro” project combines a typing test analyzer with the Gemini API for text generation. It’s built using Angular, HTML, and TypeScript, providing accurate typing speed measurement. The Gemini API adds an element of creativity by generating diverse text prompts for users to type.',
    },
    // add more projects as needed
  ];
}
