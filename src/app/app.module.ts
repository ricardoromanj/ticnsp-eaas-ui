import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterialModule } from './app.material.module';
import { MdNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
    HttpModule,
    MaterialModule,
    MdNativeDateModule
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
