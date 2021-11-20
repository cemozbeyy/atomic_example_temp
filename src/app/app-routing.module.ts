import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'sidenav', component: SideNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
