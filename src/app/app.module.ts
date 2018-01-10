import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgIf } from '@angular/common';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { FlexLayoutModule } from '@angular/flex-layout';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCheckbox } from '@angular/material';

import { HeroService } from './hero.service';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { EditorComponent } from './editor/editor.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    EditorComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }