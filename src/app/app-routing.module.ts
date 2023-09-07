import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { ContactComponent } from './contact/contact.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },    // Default route
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'devpage', component: DeveloperPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu-page', component: MenuPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
