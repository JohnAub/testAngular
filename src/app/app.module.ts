import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
<<<<<<< HEAD
import { ZiziComponent } from './Test2/zizi/zizi.component';
=======
import { Test2Component } from './test2/test2/test2.component';
>>>>>>> e9e3b5036601fc77944f50ca40d8347dbfe28b49

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
<<<<<<< HEAD
    ZiziComponent
=======
    Test2Component

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
