import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthhousekeeperComponent} from './healthhousekeeper.component';
import {healthhousekeeperRoutes} from './healthhousekeeper.routes';
import {RouterModule} from '@angular/router';
import { PersoncenterComponent } from './personcenter/personcenter.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { MyConsultComponent } from './my-consult/my-consult.component';
import { ConsultDetatilComponent } from './consult-detatil/consult-detatil.component';
import {ZycommonModule} from '../zycommon/zycommon.module';

@NgModule({
  imports: [
    CommonModule,
    ZycommonModule,
    RouterModule.forChild(healthhousekeeperRoutes)
  ],
  declarations: [
    HealthhousekeeperComponent,
    PersoncenterComponent,
    DetailInfoComponent,
    MyConsultComponent,
    ConsultDetatilComponent
  ]
})
export class HealthhousekeeperModule { }
