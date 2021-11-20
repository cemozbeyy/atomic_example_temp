import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './buttons/buttons.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TextsComponent } from './texts/texts.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SideNavComponent,
    TextsComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
