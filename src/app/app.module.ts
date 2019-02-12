import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatCheckboxModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{  MatNativeDateModule }from '@angular/material';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { DateComponent } from './date/date.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TablepanComponent } from './tablepan/tablepan.component';


// import {MatFormFieldControl} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DateComponent,
    TablepanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MatFormFieldModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule ,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [ MatDatepickerModule, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
