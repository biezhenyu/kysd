import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {lectureRoutes} from './healthlecture.routes';
import {RouterModule} from '@angular/router';
import {HealthlectureComponent} from './healthlecture.component';
import {SliderComponent} from '../base/slider/slider.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ConsultHomeComponent } from './consult-home/consult-home.component';
import { ConsultComponent } from './consult/consult.component';
import { ConsultSuccessComponent } from './consult-success/consult-success.component';
import { InfoService } from './consult-home/info.service';
import {ZycommonModule} from '../zycommon/zycommon.module';
import {SvgOptionDirective} from './consult-home/svg-option.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ZycommonModule,
    RouterModule.forChild(lectureRoutes)
  ],
  declarations: [
    HealthlectureComponent,
    SliderComponent,
    IntroduceComponent,
    ConsultHomeComponent,
    ConsultComponent,
    ConsultSuccessComponent,
    SvgOptionDirective
  ],
  providers: [
    InfoService
  ]
})
export class HealthlectureModule { }
