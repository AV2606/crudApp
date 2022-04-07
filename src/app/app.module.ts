import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoursesComponent } from './components/courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, NgModel } from '@angular/forms';

const appRoutes:Routes=[
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'courses',component:CoursesComponent},
  {path:'menu', component:MenuComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CoursesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    //NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
