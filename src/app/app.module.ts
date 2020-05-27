import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {
MatBadgeModule,MatTableModule,MatPaginatorModule,
MatCardModule,MatInputModule,MatRadioModule,MatAutocompleteModule,
MatNativeDateModule,  MatListModule,MatDatepickerModule,
MatSidenavModule,MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule,MatSelectModule, MAT_DATE_FORMATS} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CasepaperComponent } from './casepaper/casepaper.component';
import {CheifcompComponent} from './casepaper/cheifcomp/cheifcomp.component';
import { WorkdoneComponent } from './casepaper/workdone/workdone.component';
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
export const APP_DATE_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: {month: 'short', year: 'numeric', day: 'numeric'},
      monthYearLabel: {year: 'numeric'}
  }
};
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CheifcompComponent,
    DashboardComponent,
    HomePageComponent,
    MyprofileComponent,
    DoctorComponent,
    CasepaperComponent,
    WorkdoneComponent,
    ConfirmationDialogComponent
  ],
  entryComponents:[
    ConfirmationDialogComponent,
    WorkdoneComponent,
    CheifcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatListModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
//   providers: [,{
//     provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
//  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
