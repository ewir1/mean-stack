import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';



import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleModule } from './components/people/people.module';
import { HttpClientModule } from '@angular/common/http';

import { ListComponent } from './components/list/list.component';
import { ListModule } from './components/list/list.module';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ListComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PeopleModule,
    ListModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/mean-stack' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
