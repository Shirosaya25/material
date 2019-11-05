import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ParseTableComponent } from './components/parse-table/parse-table.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        ParseTableComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, BrowserAnimationsModule,

        MatToolbarModule, MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
