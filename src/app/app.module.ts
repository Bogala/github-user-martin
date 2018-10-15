import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubModule } from '../github/github.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GithubModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
