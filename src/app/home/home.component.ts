import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  
  onHireMeClick() {
    window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=bhargavprasaddas342@gmail.com&su=Seeking%20Software%20Developer%20for%20Our%20Team&body=Dear%20Bhargav%20Prasad%20Das,%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I\'m%20[Your%20Name],%20[Your%20Position]%20at%20[Your%20Company].%20We\'re%20currently%20expanding%20our%20team%20and%20are%20seeking%20a%20software%20developer%20with%20expertise%20in%20[specific%20languages%20or%20technologies].%0A%0AIf%20you\'re%20interested%20in%20exploring%20this%20opportunity,%20please%20reply%20to%20this%20email%20with%20your%20resume.%20We%20would%20be%20delighted%20to%20discuss%20the%20role%20further%20and%20learn%20about%20your%20potential%20fit%20with%20our%20team.%0A%0AThank%20you%20for%20considering%20this%20opportunity.%20We%20look%20forward%20to%20your%20response.%0A%0ABest%20regards,%0A[Your%20Name]%0A[Your%20Contact%20Information]', '_blank');

  }

}
