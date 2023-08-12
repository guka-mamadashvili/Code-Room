import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { LineComponent } from './line/line.component';
import { ContentComponent } from './content/content.component';
import { DevelopersComponent } from './developers/developers.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { SignupformComponent } from './signupform/signupform.component';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
