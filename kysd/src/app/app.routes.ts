import {Routes} from '@angular/router';
import {SkipResolve} from './guard/skip.resolve';

export let routing:Routes = [
  // 健康加油站
  {
    path: '',
    redirectTo: 'lecture',
    pathMatch: 'full'
  },
  {
    path: 'lecture',
    loadChildren: './healthlecture/healthlecture.module#HealthlectureModule',
    resolve: {
      skip: SkipResolve
    }
  },
  // 健康讲堂
  {
    path: 'gasstation',
    loadChildren: './healthygasstation/healthygasstation.module#HealthygasstationModule'
  },

  // 健康管家
  {
    path: 'housekeeper',
    loadChildren: './healthhousekeeper/healthhousekeeper.module#HealthhousekeeperModule'
  }
];
