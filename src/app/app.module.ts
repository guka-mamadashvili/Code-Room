import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { LineComponent } from './components/line/line.component';
import { ContentComponent } from './components/content/content.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupformComponent } from './components/signupform/signupform.component';
import { SigninComponent } from './components/signin/signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { DeveloperPageComponent } from './components/developer-page/developer-page.component';
import { DeveloperContentComponent } from './components/developer-content/developer-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { LogoComponent } from './components/logo/logo.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactContentComponent } from './components/contact-content/contact-content.component';
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { MenuPageContentComponent } from './components/menu-page-content/menu-page-content.component';
import { CourseCardComponent } from './components/course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    LineComponent,
    ContentComponent,
    DevelopersComponent,
    CardComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SignupComponent,
    SignupformComponent,
    SigninComponent,
    SigninFormComponent,
    DeveloperPageComponent,
    DeveloperContentComponent,
    AboutContentComponent,
    LogoComponent,
    ContactComponent,
    ContactContentComponent,
    MenuPageComponent,
    MenuPageContentComponent,
    CourseCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
