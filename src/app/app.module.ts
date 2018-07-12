import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { CvFormComponent } from './cv-form/cv-form.component';
import { HeaderComponent } from './header/header.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppBootstrapModule } from './app-bootstrap.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CvWorkComponent } from './cv-form/cv-work/cv-work.component';
import { CvEducationComponent } from './cv-form/cv-education/cv-education.component';

@NgModule({
  declarations: [
    AppComponent,
    CvFormComponent,
    HeaderComponent,
    CvListComponent,
    CvWorkComponent,
    CvEducationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    AppBootstrapModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
