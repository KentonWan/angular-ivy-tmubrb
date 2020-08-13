import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoriesComponent } from './categories.component';
import { AppletComponent } from './applet.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CategoriesComponent, AppletComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
