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
