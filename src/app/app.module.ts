import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }