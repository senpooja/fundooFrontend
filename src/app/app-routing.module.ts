import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DemoComponent } from './components/demo/demo.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { IconsComponent } from './components/icons/icons.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
{path : 'register', component:RegistrationComponent},
{path : 'login', component:LoginComponent},
{path : 'forgetpassword', component:ForgetpasswordComponent},
{path : 'resetpassword', component:ResetpasswordComponent},
{path : 'demo', component:DemoComponent},
{path:'dashboard',
component:DashboardComponent,
children:[
  {path:'getallnotes',component:GetallnotesComponent}
]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
