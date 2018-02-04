import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ApiserviceService} from '../../api/apiservice.service';
import {LoadingComponent} from '../../base/loading/loading.component';
import {PromitComponent} from '../../base/promit/promit.component';

@Component({
  selector: 'app-consult-detatil',
  templateUrl: './consult-detatil.component.html',
  styleUrls: ['./consult-detatil.component.less']
})
export class ConsultDetatilComponent implements OnInit {

  @ViewChild('zypromit') zypromit: PromitComponent;
  @ViewChild('zyloading') zyloading: LoadingComponent;
  constructor(private routerInfo: ActivatedRoute,
              private api: ApiserviceService) { }
  public id:string;
  public detail;
  public createTime;
  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params)  => this.id = params['id']);
    this._getconsultDetail();
  }

  // 获取咨询单详情
  _getconsultDetail() {
    this.zyloading._showLoading();
    this.api.getconsultDetail(this.id).subscribe((res) => {
      this.zyloading._closeLoading();
      console.log(res);
      this.detail = res;
    }, (error) => {
      this.zyloading._closeLoading();
      this.zypromit.promitClose(error.error.message);
    });
  }

}
