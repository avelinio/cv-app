import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CvFormComponent } from './cv-form/cv-form.component';
import { CvListComponent } from './cv-list/cv-list.component';

const appRoutes: Routes = [
    {path: '', component: CvFormComponent},
    {path: 'admin', component: CvListComponent},
];

@NgModule ({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}