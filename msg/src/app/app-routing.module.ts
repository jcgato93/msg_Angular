import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ConversationComponent } from './Components/conversation/conversation.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [  
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'home', component:HomeComponent},
  {path: 'conversation', component: ConversationComponent},
  {path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
