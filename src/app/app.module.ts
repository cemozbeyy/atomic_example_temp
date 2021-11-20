import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { IndexComponent } from './shared/pages/main/index.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { TextsComponent } from './shared/components/texts/texts.component';
import { MiddleSelectorComponent } from './shared/pages/main/components/middle-selector/middle-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    TextsComponent,
    HeaderComponent,
    IndexComponent,
    ButtonComponent,
    MiddleSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
