import {Component, OnInit, ViewChild} from '@angular/core';
import {localurl} from '../../base/config';
import {ApiserviceService} from '../../api/apiservice.service';
import {PromitComponent} from '../../base/promit/promit.component';
import {LoadingComponent} from '../../base/loading/loading.component';

@Component({
  selector: 'app-personcenter',
  templateUrl: './personcenter.component.html',
  styleUrls: ['./personcenter.component.less']
})
export class PersoncenterComponent implements OnInit {
  @ViewChild('zypromit') zypromit: PromitComponent;
  @ViewChild('zyloading') zyloading: LoadingComponent;
  constructor(private api: ApiserviceService) { }
  public defaultIcon:string = `../${localurl}/assets/jkimages/personTag.png`;
  public userInfo: any;

  ngOnInit() {
    this.zyloading._showLoading();
    // 获取用户头像
    this.api.getuserIcon().subscribe((res) => {
      this.defaultIcon = res['picUrl']
      sessionStorage.setItem('icon', res['picUrl']);
    }, (error) => {
      this.zypromit.promitClose(error.error.message);
    });

    // 获取用户信息
    this._getUserInfo();
  }

  _getUserInfo() {
    this.api.findUserDeatils().subscribe((res) => {
      this.zyloading._closeLoading();
      this.userInfo = res;
      sessionStorage.setItem('name', res['basicInfo']['nickname']);
    }, (error) => {
      this.zyloading._closeLoading();
      this.zypromit.promitClose(error.error.message);
    });
  }
}
