import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  {path:  '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data:{animation: 'Home'} },
  { path: 'info/:id', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
