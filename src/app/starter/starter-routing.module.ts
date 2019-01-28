import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import { AWSPage1StarterComponent } from '../page/aws-page1/aws-page1.starter.component';

const routes: Routes = [
  { path: 'index', component: StarterComponent },
  { path: 'index1', component: AWSPage1StarterComponent },
  { path: '', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
