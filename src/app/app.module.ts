import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { BragboardComponent } from './bragboard/bragboard.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { TeamLogoComponent } from './team-logo/team-logo.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeContainerComponent,
    OnboardingComponent,
    BragboardComponent,
    WelcomeMessageComponent,
    TeamLogoComponent,
    UsefulLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
