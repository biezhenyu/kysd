import {Routes} from '@angular/router';
import {HealthygasstationComponent} from './healthygasstation.component';
import {HealthconsultComponent} from './healthconsult/healthconsult.component';
import {SpecialcolumnComponent} from './specialcolumn/specialcolumn.component';
import {ContentComponent} from './content/content.component';
import {HypertensionComponent} from './hypertension/hypertension.component';
import {HyperlipemiaComponent} from './hyperlipemia/hyperlipemia.component';
import {HyperglycemiaComponent} from './hyperglycemia/hyperglycemia.component';
import {HeartbingComponent} from './heartbing/heartbing.component';
import {MiComponent} from './mi/mi.component';
import {SupersessionComponent} from './supersession/supersession.component';
import {GoutComponent} from './gout/gout.component';
import {SkindiseaseComponent} from './skindisease/skindisease.component';
import {PainComponent} from './pain/pain.component';
import {AstricttionComponent} from './astricttion/astricttion.component';

export const healthygasstationRoutes:Routes = [
  {
    path:'',
    component:HealthygasstationComponent,
    children: [
      { path: '', redirectTo:'health', pathMatch:'full' },
      { path: 'health', component: HealthconsultComponent },   // 心脑血管咨询
      { path: 'specialcolumn/:id', component: SpecialcolumnComponent },
      { path: 'content/:id/:contetId', component: ContentComponent },
      { path: 'hypertension/:id/:contetId', component: HypertensionComponent }, //高血压
      { path: 'hyperlipemia/:id/:contetId', component: HyperlipemiaComponent }, // 高血脂
      { path: 'hyperglycemia/:id/:contetId', component: HyperglycemiaComponent }, // 高血糖
      { path: 'heart/:id/:contetId', component: HeartbingComponent }, //肺心病
      { path: 'mi/:id/:contetId', component: MiComponent }, //心梗专栏
      { path: 'supersession/:id/:contetId', component: SupersessionComponent }, // 代谢专栏
      { path: 'gout/:id/:contetId', component: GoutComponent }, // 痛风
      { path: 'skin/:id/:contetId', component: SkindiseaseComponent }, // 皮肤病\
      { path: 'pain/:id/:contetId', component: PainComponent }, // 痛症
      { path: 'astricttion/:id/:contetId', component: AstricttionComponent }, // 便秘
      { path:'**', redirectTo:'health' }
    ]
  }
]
