import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DataService } from './services';
import { PeopleTableComponent } from './components';
import { PeopleTableSelectComponent } from './components/people-table-select/people-table-select.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    PeopleTableComponent
  ],
  exports:[
    ToolbarComponent,
    PeopleTableComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
