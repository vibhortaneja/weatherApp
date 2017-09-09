import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SearchService } from './search.service';
import { AddService } from './add.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';

const approutes:Routes=[
{path: '', component: WeatherComponent},
{path: 'search', component: WeatherComponent},
{path: 'list', component: ListComponent},
{path: 'fav', component: DetailComponent},
{path: 'login', component: LoginComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailComponent,
    WeatherComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [SearchService,AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
