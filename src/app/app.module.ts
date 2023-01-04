import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule }  from '@angular/material/select';
import { MatDatepickerModule}  from '@angular/material/datepicker';
import { MatNativeDateModule }  from '@angular/material/core';
import { MatRadioModule }  from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import {  FlexLayoutModule } from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    MatIconModule,
    MatButtonModule,
   MatToolbarModule,
   MatDialogModule,
   MatFormFieldModule,
   MatInputModule,
   MatSelectModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatRadioModule, 
   ReactiveFormsModule,
  FormsModule,
   MatTableModule,
   HttpClientModule,
   MatPaginatorModule,
   MatSelectModule,
   MatSortModule,
   MatCardModule,
   FlexLayoutModule,
   BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
