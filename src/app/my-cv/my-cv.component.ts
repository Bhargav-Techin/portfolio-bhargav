import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrl: './my-cv.component.css'
})
export class MyCvComponent {
  constructor(private router: Router) { }


  downloadFile() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/BHARGAV_PRASAD_DAS_Resume.pdf');
    link.setAttribute('download', 'BHARGAV_PRASAD_DAS_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.router.navigate(['']);
  }
}
