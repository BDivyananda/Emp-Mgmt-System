// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from  './employee-list/employee-list.component';

@NgModule({
  
  imports: [
    BrowserModule,
    AppComponent
    // Add other Angular modules here
  ],
  providers: [],
})
export class AppModule { }
