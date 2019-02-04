import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterNavbarComponent } from './starter-navbar/starter-navbar.component';
import { StarterMainSidebarComponent } from './starter-main-sidebar/starter-main-sidebar.component';
import { StarterContentComponent } from './starter-content/starter-content.component';
import { StarterControlSidebarComponent } from './starter-control-sidebar/starter-control-sidebar.component';
import { StarterFooterComponent } from './starter-footer/starter-footer.component';
import { AWSPage1StarterComponent } from '../page/aws-page1/aws-page1.starter.component';
import { AwsPage1Component } from '../page/aws-page1/aws-page1.component';
import { AwsPage2Component } from '../page/aws-page1/aws-page2.component';
import { AWSPage2StarterComponent } from '../page/aws-page1/aws-page2.starter.component';
import { AwsPage3Component } from '../page/aws-page1/aws-page3.component';
import { AWSPage3StarterComponent } from '../page/aws-page1/aws-page3.starter.component';


@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule
  ],
  declarations: [
    StarterComponent,
    AWSPage1StarterComponent,
    AWSPage2StarterComponent,
    AWSPage3StarterComponent,

    StarterNavbarComponent,
    StarterMainSidebarComponent,
    StarterContentComponent,
    AwsPage1Component,
    AwsPage2Component,
    AwsPage3Component,

    StarterControlSidebarComponent,
    StarterFooterComponent
   
  ]
})
export class StarterModule { }
