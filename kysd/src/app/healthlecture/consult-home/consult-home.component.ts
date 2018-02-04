import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiserviceService} from '../../api/apiservice.service';
import {InfoService} from './info.service';
import {PromitComponent} from '../../base/promit/promit.component';
import {LoadingComponent} from '../../base/loading/loading.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consult-home',
  templateUrl: './consult-home.component.html',
  styleUrls: ['./consult-home.component.less']
})
export class ConsultHomeComponent implements OnInit {

  constructor(private api: ApiserviceService,
              private info: InfoService,
              private routerInfo: Router) { }

  @ViewChild('zypromit') zypromit: PromitComponent;
  @ViewChild('zyloading') zyloading: LoadingComponent;
  public disease;
  public serves;
  public haveSelect: any[] = [];
  public haveSelectServe: any[] = [];
  public diseadeSortIcon: any[] = [];
  public serviceSortIcon: any[] = [];
  ngOnInit() {
    // 获取常见疾病
    if (this.info.getdise()) {
      this.disease = this.info.getdise();
    } else {
      this.zyloading._showLoading();
      this.api.findAllCommonDisease().subscribe((res) => {
        this._addstatus(res);
        this.disease = res;
        this.info.setdise(res);
        this.zyloading._closeLoading();
      }, (error) => {
        this.zyloading._closeLoading();
        this.zypromit.promitClose(error.error.message);
      });
    }

    // 获取服务分类
    if (this.info.getService()) {
      this.serves = this.info.getService();
    } else {
      this.api.findAllServiceClass().subscribe((res) => {
        this._addstatus(res);
        this.serves = res;
        this.info.setService(res);
      }, (error) => {
        this.zypromit.promitClose(error.error.message);
      });
    }

    // 疾病分类的字体图标
    this.diseadeSortIcon = ['#icon-naobu', '#icon-xieya', '#icon-xiezhi', '#icon-iconxt', '#icon-feiai', '#icon-xinzang', '#icon-zhifangdaixieminganxing', '#icon-tongfeng', '#icon-pifuke', '#icon-toutong', '#icon-zhipin'];
    this.serviceSortIcon = ['#icon-toutong', '#icon-manbing', '#icon-yangsheng', '#icon-lvyou', '#icon-jiankangguanli2'];
    let select:any;
    if (JSON.parse(sessionStorage.getItem('select'))){
      select = JSON.parse(sessionStorage.getItem('select'));
      if (select['disease'] && select['disease'].length > 0) {
        this.haveSelect = JSON.parse(sessionStorage.getItem('select'))['disease'];
      }
      if (select['serve'] && select['serve'].length > 0)  {
        this.haveSelectServe = JSON.parse(sessionStorage.getItem('select'))['serve'];
      }
    }
  }

  // 疾病
  diseaseClick(index, item) :void {
    this._changeClass(index, event, 0, item);
  }
  // 服务
  servesClick(index, item) :void {
    this._changeClass(index, event, 1, item);
  }

  _changeClass(index:number, event, state:number, item:any) {
    if (state === 0) {
      if (item['stateText'] === '未选中') {
        this.disease[index]['stateText'] = '选中';
        this.haveSelect.push(this.disease[index]);
      } else {
        this.disease[index]['stateText'] = '未选中';
        this.haveSelect.splice(this.haveSelect.indexOf(this.disease[index]), 1);
      }
    } else {
      if (item['stateText'] === '未选中') {
        this.serves[index]['stateText'] = '选中';
        this.haveSelectServe.push(this.serves[index]);
      } else {
        this.serves[index]['stateText'] = '未选中';
        this.haveSelectServe.splice(this.haveSelectServe.indexOf(this.serves[index]), 1);
      }
    }

  }

  // 下一步
  next() {
    if (this.haveSelect.length > 0 || this.haveSelectServe.length > 0) {
      sessionStorage.setItem('select', JSON.stringify({
        'disease': this.haveSelect,
        'serve': this.haveSelectServe
      }));
      this.routerInfo.navigate(['/lecture/consult']);
    } else {
      this.zypromit.promitClose('先选择项目进行咨询！');
    }
  }

  // 添加状态
  _addstatus(list) {
    for (let i = 0; i < list.length; i++) {
      list[i].stateText = '未选中';
    }
  }

}
