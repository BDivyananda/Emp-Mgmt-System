// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from  './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent // Add your components here
  ],
  imports: [
    BrowserModule
    // Add other Angular modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
