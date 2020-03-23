import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InputMaxLengthDirective } from './directives/input-maxlen.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatMenuModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


const materialModules = [
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatBadgeModule,
  MatMenuModule,
  MatSelectModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatExpansionModule,
  DragDropModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatCheckboxModule
];

const primeNgModules = [
  AccordionModule,
  CalendarModule
];

const sharedComponents = [
];

const directives = [
  NumberOnlyDirective,
  InputMaxLengthDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ...materialModules,
    ...primeNgModules,
    RouterModule
  ],
  exports: [...sharedComponents, ...directives],
  declarations: [...sharedComponents, ...directives],
  providers: [],
})
export class SharedModule { }
