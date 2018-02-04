import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";


//  在路由激活前获取路由数据
@Injectable()
export class SkipResolve implements Resolve<any> {
  constructor (private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(sessionStorage.getItem('local'), 1111)
    let name;
    if (sessionStorage.getItem('local')) {
      name = sessionStorage.getItem('local');
    }
    switch (name) {
      case 'hec':
        this.router.navigateByUrl('/gasstation/health');
        break;
      case 'lecture':
        break;
      case 'housekeeper':
        this.router.navigateByUrl('/housekeeper/personcnter');
        break;
      default:
        this.router.navigateByUrl('/gasstation/health');
        break;
    }
    return undefined;
  }

}
