import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { SearchNewMediaComponent } from './search-new-media/search-new-media.component';
import { ViewSearchDetailsComponent } from './view-search-details/view-search-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'watchList', pathMatch: 'full' },
  { path: 'watchList', component: DashboardComponent }, 
  { path: 'search', component: SearchNewMediaComponent},
  { path: 'details/:id', component: ViewSearchDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
