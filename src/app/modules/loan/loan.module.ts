import { LoanContainerComponent } from './container/loan-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatTableModule, MatIconModule, MatTooltipModule, MatButtonToggleModule, MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatMenuModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatExpansionModule, MatCardModule, MatStepperModule, MatTabsModule, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoanOverviewPageComponent } from './components/loan-overview-page/loan-overview-page.component';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanAddComponent } from './components/loan-add/loan-add.component';
import { LoanDetailsComponent } from './components/loan-details/loan-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoanContainerComponent,
    children: [
      {
        path: '',
        component: LoanOverviewPageComponent
      }
    ]
  }
];
const primeNgModules = [];

const materialModules = [
  MatTableModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonToggleModule,
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
  MatCardModule,
  MatMenuModule,
  MatStepperModule,
  MatTabsModule,
  MatButtonModule,
  MatDialogModule,
  MatSlideToggleModule
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...primeNgModules,
    ...materialModules,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    LoanContainerComponent,
    LoanOverviewPageComponent,
    LoanListComponent,
    LoanAddComponent,
    LoanDetailsComponent
  ],
  providers: [],
})
export class LoanModule { }
