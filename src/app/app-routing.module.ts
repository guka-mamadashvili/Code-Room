import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { DeveloperPageComponent } from './components/developer-page/developer-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';

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
