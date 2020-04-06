import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'application', loadChildren: './modules/application/application.module#ApplicationModule' },
  { path: 'borrower', loadChildren: './modules/borrower/borrower.module#BorrowerModule' },
  { path: 'collection', loadChildren: './modules/collection/collection.module#CollectionModule' },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'loan', loadChildren: './modules/loan/loan.module#LoanModule' },
  { path: 'collectible', loadChildren: './modules/schedule-posting/schedule-posting.module#SchedulePostingModule' },
  { path: 'report', loadChildren: './modules/report/report.module#ReportModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
