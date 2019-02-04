import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import { AWSPage1StarterComponent } from '../page/aws-page1/aws-page1.starter.component';
import { AWSPage2StarterComponent } from '../page/aws-page1/aws-page2.starter.component';
import { AWSPage3StarterComponent } from '../page/aws-page1/aws-page3.starter.component';

const routes: Routes = [
  { path: 'index', component: StarterComponent },
  { path: 'index1', component: AWSPage1StarterComponent },
  { path: 'index2', component: AWSPage2StarterComponent },
  { path: 'index3', component: AWSPage3StarterComponent },

 
  { path: '', redirectTo: 'index' }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
