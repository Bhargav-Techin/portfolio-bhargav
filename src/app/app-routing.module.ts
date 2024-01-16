import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyCvComponent } from './my-cv/my-cv.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    component: LandingPageComponent,
    path: ''
  },
  {
    component: MyCvComponent,
    path: 'my-cv'
  },
  {
    component: MyWorkComponent,
    path: 'my-work'
  },
  {
    component: AboutMeComponent,
    path: 'about-me'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
