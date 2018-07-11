import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import {MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatToolbarModule, MatIconModule, MatTableModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
