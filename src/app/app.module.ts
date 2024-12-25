import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StddashComponent } from './shared/component/stddash/stddash.component';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    StddashComponent,
    StdtableComponent,
    StdformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
