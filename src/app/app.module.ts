import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PersonsService} from './services/persons.service';
import {RoutingModule} from './routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MaterialModule} from './shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {PersonCardComponent} from './components/person-card/person-card.component';
import {PersonInfoComponent} from './components/person-info/person-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ToolbarComponent,
    PersonCardComponent,
    PersonInfoComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    PersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
