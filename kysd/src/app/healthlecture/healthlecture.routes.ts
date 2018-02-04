import { HealthlectureComponent } from './healthlecture.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ConsultHomeComponent } from './consult-home/consult-home.component';
import { ConsultComponent } from './consult/consult.component';
import { ConsultSuccessComponent } from './consult-success/consult-success.component';

export const lectureRoutes = [
  {
    path:'',
    component: HealthlectureComponent,
    children: [
      { path: '', redirectTo:'introduce', pathMatch:'full'},
      { path: 'introduce', component: IntroduceComponent},
      { path: 'consulthome', component: ConsultHomeComponent },
      { path: 'consult', component: ConsultComponent},
      { path: 'consultsuccess', component: ConsultSuccessComponent},
      { path:'**', redirectTo:'introduce' }
    ]
  }
];
