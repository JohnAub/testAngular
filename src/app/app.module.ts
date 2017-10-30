import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ZiziComponent } from './Test2/zizi/zizi.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ZiziComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
