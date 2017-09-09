import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { SearchService } from './search.service';
import { AddService } from './add.service';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { WeatherComponent } from './weather/weather.component';

import {RouterModule, Routes } from '@angular/router';

const approutes:Routes=[
{path: '', component: SearchComponent},
{path: '/list', component: ListComponent},
{path: '/fav', component: DetailComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [SearchService,AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
