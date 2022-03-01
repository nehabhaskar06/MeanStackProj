import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { UserpageComponent } from './userpage/userpage.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from  '@angular/common/http'
import { CommonModule } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserpageComponent,
    AdminComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    routing,
    HttpClientModule,
    RouterModule,
 CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  


  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
