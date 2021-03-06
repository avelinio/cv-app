import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { CvFormComponent } from './cv-form/cv-form.component';
import { HeaderComponent } from './header/header.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkInfoComponent } from './cv-form/work-info/work-info.component';
import { EducationInfoComponent } from './cv-form/education-info/education-info.component';
import { UserInfoComponent } from './cv-form/user-info/user-info.component';
import { LanguagesComponent } from './cv-form/languages/languages.component';
import { SkillsComponent } from './cv-form/skills/skills.component';

import { TagInputModule } from 'ngx-chips';

import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CvFormComponent,
    HeaderComponent,
    CvListComponent,
    WorkInfoComponent,
    EducationInfoComponent,
    UserInfoComponent,
    LanguagesComponent,
    SkillsComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    TagInputModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
