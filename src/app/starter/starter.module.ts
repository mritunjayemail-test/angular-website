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


@NgModule({
  imports: [
    CommonModule,
    StarterRoutingModule
  ],
  declarations: [
    StarterComponent,
    AWSPage1StarterComponent,

    StarterNavbarComponent,
    StarterMainSidebarComponent,
    StarterContentComponent,
    AwsPage1Component,

    StarterControlSidebarComponent,
    StarterFooterComponent
   
  ]
})
export class StarterModule { }
