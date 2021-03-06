import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './patient/form/form.component';
import { TableComponent } from './patient/table/table.component';
import { PatientService } from './patient.service';
import { PatientsComponent } from './patient/patients.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: PatientsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    TableComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
