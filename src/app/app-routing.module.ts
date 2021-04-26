import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeNewComponent} from './home-new/home-new.component';
import {HomeTemplateFormComponent} from './home-template-form/home-template-form.component';

const routes: Routes = [
  {path: '', component: HomeTemplateFormComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
