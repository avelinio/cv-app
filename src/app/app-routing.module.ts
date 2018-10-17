import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CvFormComponent } from './cv-form/cv-form.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: CvFormComponent },
  { path: 'list', component: CvListComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
