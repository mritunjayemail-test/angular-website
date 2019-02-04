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
import { AWSPage10StarterComponent } from '../page/aws-page1/aws-page10.starter.component';
import { AWSPage9StarterComponent } from '../page/aws-page1/aws-page9.starter.component';
import { AWSPage7StarterComponent } from '../page/aws-page1/aws-page7.starter.component';
import { AWSPage8StarterComponent } from '../page/aws-page1/aws-page8.starter.component';
import { AWSPage6StarterComponent } from '../page/aws-page1/aws-page6.starter.component';
import { AWSPage5StarterComponent } from '../page/aws-page1/aws-page5.starter.component';
import { AWSPage4StarterComponent } from '../page/aws-page1/aws-page4.starter.component';
import { AwsPage10Component } from '../page/aws-page1/aws-page10.component';
import { AwsPage9Component } from '../page/aws-page1/aws-page9.component';
import { AwsPage8Component } from '../page/aws-page1/aws-page8.component';
import { AwsPage7Component } from '../page/aws-page1/aws-page7.component';
import { AwsPage6Component } from '../page/aws-page1/aws-page6.component';
import { AwsPage5Component } from '../page/aws-page1/aws-page5.component';
import { AwsPage4Component } from '../page/aws-page1/aws-page4.component';


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
    AWSPage4StarterComponent,
    AWSPage5StarterComponent,
    AWSPage6StarterComponent,
    AWSPage7StarterComponent,
    AWSPage8StarterComponent,
    AWSPage9StarterComponent,
    AWSPage10StarterComponent,

    StarterNavbarComponent,
    StarterMainSidebarComponent,
    StarterContentComponent,
    AwsPage1Component,
    AwsPage2Component,
    AwsPage3Component,
    AwsPage4Component,
    AwsPage5Component,
    AwsPage6Component,
    AwsPage7Component,
    AwsPage8Component,
    AwsPage9Component,
    AwsPage10Component,

    StarterControlSidebarComponent,
    StarterFooterComponent
   
  ]
})
export class StarterModule { }
