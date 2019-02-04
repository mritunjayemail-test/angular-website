import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter.component';
import { AWSPage1StarterComponent } from '../page/aws-page1/aws-page1.starter.component';
import { AWSPage2StarterComponent } from '../page/aws-page1/aws-page2.starter.component';
import { AWSPage3StarterComponent } from '../page/aws-page1/aws-page3.starter.component';
import { AWSPage10StarterComponent } from '../page/aws-page1/aws-page10.starter.component';
import { AWSPage9StarterComponent } from '../page/aws-page1/aws-page9.starter.component';
import { AWSPage8StarterComponent } from '../page/aws-page1/aws-page8.starter.component';
import { AWSPage7StarterComponent } from '../page/aws-page1/aws-page7.starter.component';
import { AWSPage6StarterComponent } from '../page/aws-page1/aws-page6.starter.component';
import { AWSPage5StarterComponent } from '../page/aws-page1/aws-page5.starter.component';
import { AWSPage4StarterComponent } from '../page/aws-page1/aws-page4.starter.component';

const routes: Routes = [
  { path: 'index', component: StarterComponent },
  { path: 'index1', component: AWSPage1StarterComponent },
  { path: 'index2', component: AWSPage2StarterComponent },
  { path: 'index3', component: AWSPage3StarterComponent },
  { path: 'index4', component: AWSPage4StarterComponent },
  { path: 'index5', component: AWSPage5StarterComponent },
  { path: 'index6', component: AWSPage6StarterComponent },
  { path: 'index7', component: AWSPage7StarterComponent },
  { path: 'index8', component: AWSPage8StarterComponent },
  { path: 'index9', component: AWSPage9StarterComponent },
  { path: 'index10', component: AWSPage10StarterComponent },


  { path: '', redirectTo: 'index' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
