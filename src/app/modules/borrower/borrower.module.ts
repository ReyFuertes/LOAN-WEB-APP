import { BorrowerContainerComponent } from './container/borrower-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatTableModule, MatIconModule, MatTooltipModule, MatButtonToggleModule, MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatMenuModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatExpansionModule, MatCardModule, MatStepperModule, MatTabsModule, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { BorrowerOverviewPageComponent } from './components/borrower-overview-page/borrower-overview-page.component';
import { BorrowerListComponent } from './components/borrower-list/borrower-list.component';
import { BorrowerDetailsComponent } from './components/borrower-details/borrower-details.component';
import { BorrowerAddComponent } from './components/borrower-add/borrower-add.component';

const routes: Routes = [
  {
    path: '',
    component: BorrowerContainerComponent,
    children: [
      {
        path: '',
        component: BorrowerOverviewPageComponent
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
    BorrowerContainerComponent,
    BorrowerOverviewPageComponent,
    BorrowerListComponent,
    BorrowerDetailsComponent,
    BorrowerAddComponent
  ],
  providers: [],
})
export class BorrowerModule { }
