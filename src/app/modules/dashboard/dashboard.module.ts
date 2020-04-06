import { DashboardContainerComponent } from './container/dashboard-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatIconModule, MatTooltipModule, MatButtonToggleModule, MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatMenuModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatExpansionModule, MatCardModule, MatStepperModule, MatTabsModule, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardOverviewPageComponent } from './components/dashboard-overview-page/dashboard-overview-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {
        path: '',
        component: DashboardOverviewPageComponent
      }
    ]
  }
];
const primeNgModules = [];

const materialModules = [
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
    DashboardContainerComponent,
    DashboardOverviewPageComponent
  ],
  providers: [],
})
export class DashboardModule { }
