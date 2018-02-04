import { Routes } from '@angular/router';
import { HealthhousekeeperComponent } from './healthhousekeeper.component';
import { PersoncenterComponent } from './personcenter/personcenter.component';
import { DetailInfoComponent } from './detail-info/detail-info.component';
import { MyConsultComponent } from './my-consult/my-consult.component';
import { ConsultDetatilComponent } from './consult-detatil/consult-detatil.component';

export const healthhousekeeperRoutes:Routes = [
  {
    path: '',
    component: HealthhousekeeperComponent,
    children: [
      { path: '', redirectTo:'personcnter', pathMatch:'full' },
      { path: 'personcnter', component: PersoncenterComponent },
      { path: 'dtail', component: DetailInfoComponent },
      { path: 'myconsult', component: MyConsultComponent },
      { path: 'consultdetail/:id', component: ConsultDetatilComponent },
      { path:'**', redirectTo:'personcnter' }
    ]
  }
];
