import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ApplicationContainerComponent } from './container/application-container.component';
import { NgModule } from '@angular/core';
import { MatTableModule, MatIconModule, MatTooltipModule, MatButtonToggleModule, MatListModule, MatFormFieldModule, MatInputModule, MatBadgeModule, MatMenuModule, MatSelectModule, MatButtonModule, MatAutocompleteModule, MatExpansionModule, MatCardModule, MatStepperModule, MatTabsModule, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { ApplicationOverviewPageComponent } from './components/application-overview-page/application-overview-page.component';
import { ApplicationAddComponent } from './components/application-add/application-add.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { ApplicationDetailsComponent } from './components/application-details/application-details.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationContainerComponent,
    children: [
      {
        path: '',
        component: ApplicationOverviewPageComponent
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
    ApplicationContainerComponent,
    ApplicationOverviewPageComponent,
    ApplicationAddComponent,
    ApplicationListComponent,
    ApplicationDetailsComponent
  ],
  providers: [],
})
export class ApplicationModule { }
