import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {PreAuthComponent} from './pre-auth/pre-auth.component';
import {HomeUserComponent} from './home-user/home-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'preauth', pathMatch: 'full' },
  { path: 'preauth', component: PreAuthComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'homeuser', component: HomeUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
