import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Pages/main/main.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
