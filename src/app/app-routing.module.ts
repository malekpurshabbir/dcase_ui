import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CheifcompComponent } from './casepaper/cheifcomp/cheifcomp.component';
import { CasepaperComponent } from './casepaper/casepaper.component';
import { WorkdoneComponent } from './casepaper/workdone/workdone.component';
import { DoctorComponent } from './doctor/doctor.component';


const routes: Routes = [
  {path: '', component:LoginPageComponent},
  {path: 'home', component:HomePageComponent,children:[
    {path: 'dash', component:DashboardComponent},
  ]},
  {path:'doc',component:CasepaperComponent,children:[
    
   
  ]},
  {path:'work',component:WorkdoneComponent},
  {path:'chief',component:CheifcompComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
