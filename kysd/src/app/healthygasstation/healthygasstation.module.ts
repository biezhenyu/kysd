import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthygasstationComponent} from './healthygasstation.component';
import {healthygasstationRoutes} from './healthygasstation.routes';
import {RouterModule} from '@angular/router';
import {HealthconsultComponent} from './healthconsult/healthconsult.component';
import { SpecialcolumnComponent } from './specialcolumn/specialcolumn.component';
import { ContentComponent } from './content/content.component';
import { HyperlipemiaComponent } from './hyperlipemia/hyperlipemia.component';
import { HypertensionComponent } from './hypertension/hypertension.component';
import {Zylazy} from '../base/lazy';
import { HyperglycemiaComponent } from './hyperglycemia/hyperglycemia.component';
import { HeartbingComponent } from './heartbing/heartbing.component';
import { MiComponent } from './mi/mi.component';
import { SupersessionComponent } from './supersession/supersession.component';
import { GoutComponent } from './gout/gout.component';
import { SkindiseaseComponent } from './skindisease/skindisease.component';
import { PainComponent } from './pain/pain.component';
import { AstricttionComponent } from './astricttion/astricttion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(healthygasstationRoutes)
  ],
  declarations: [
    HealthygasstationComponent,
    HealthconsultComponent,
    SpecialcolumnComponent,
    ContentComponent,
    HyperlipemiaComponent,
    HypertensionComponent,
    HyperglycemiaComponent,
    HeartbingComponent,
    MiComponent,
    SupersessionComponent,
    GoutComponent,
    SkindiseaseComponent,
    PainComponent,
    AstricttionComponent
  ],
  providers: [
    Zylazy
  ]
})
export class HealthygasstationModule { }
