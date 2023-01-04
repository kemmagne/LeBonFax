import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { DialogComponent } from './dialog/dialog.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeListComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSlideToggleModule,
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
   MatCardModule
  ]
})
export class HomeModule { }
