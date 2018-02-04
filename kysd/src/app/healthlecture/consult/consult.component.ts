import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckService } from '../../base/check.service';
import {PromitComponent} from '../../base/promit/promit.component';
import {LoadingComponent} from '../../base/loading/loading.component';
import {ApiserviceService} from '../../api/apiservice.service';
import { Router } from '@angular/router';
import { url, localurl } from '../../base/config';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.less']
})
export class ConsultComponent implements OnInit {

  @ViewChild('phone') phone: ElementRef;
  @ViewChild('zypromit') zypromit: PromitComponent;
  @ViewChild('zyloading') zyloading: LoadingComponent;

  public name: string;
  public nameErr: boolean = false;
  public phonenum:string;
  public phoneErr: boolean = true;
  public yanhengmaPromit:string = "获取验证码";
  public identifyingCode:string;
  public isShowMess: any = true;

  constructor(private check: CheckService,
              private api: ApiserviceService,
              private routerInfo: Router) { }

  ngOnInit() {
    this.phone.nativeElement.style.height = window.innerHeight + "px";
  }

  checkName():void {
    this.name.length > 5 ? this.nameErr = true : this.nameErr = false;
  }
  checkPhone():void {
    this.check.checkPhone(this.phonenum) ? this.phoneErr = true : this.phoneErr = false;
  }

  // 获取验证码
  getIdentifyingCode():void {
    if (!this.name && !this.phonenum) {
      this.zypromit.promitClose('请输入呢称和手机号！');
      return;
    }
    if (!this.phoneErr) {
      this.zypromit.promitClose('手机号码错误！');
      return;
    }
    this.zyloading._showLoading();

    // 获取验证码
    this.api.getMobileVerifyCode(this.phonenum).subscribe((res) => {
      console.log(res);
      this.zyloading._closeLoading();
      let num = 60;
      this.yanhengmaPromit = "60";
      const timer = setInterval(() => {
        num --;
        const temp = num;
        this.yanhengmaPromit = temp.toString();
        if (num === 0) {
          num = 0;
          this.yanhengmaPromit = "获取验证码";
          clearInterval(timer);
        }
      }, 1000);
    }, (error) => {
      this.zyloading._closeLoading();
      this.zypromit.promitClose(error.error.message);
    });
  }

  // 确定
  sure():void {
    if (!this.identifyingCode && this.isShowMess) {
      this.zypromit.promitClose('请输入验证码！');
      return;
    }
    // 整理数据
    const list = JSON.parse(sessionStorage.getItem('select'));
    let diseaseList = [];
    let servesList = [];
    for (let i = 0; i < list.disease.length; i++) {
      diseaseList.push(list.disease[i]['id']);
    }
    for (let i = 0; i < list.serve.length; i++) {
      servesList.push(list.serve[i]['id']);
    }
    let option = {
      isVerification: this.isShowMess,
      mobile: this.phonenum,
      code: this.identifyingCode,
      callName: this.name,
      diseases: diseaseList,
      services: servesList
    };

    // 咨询
    this.zyloading._showLoading();
    this.api.consult(option).subscribe(() => {
      this.zyloading._closeLoading();
      this.routerInfo.navigate(['/lecture/consultsuccess']);
    }, (error) => {
      this.zyloading._closeLoading();
      this.zypromit.promitClose(error.error.message);
    });
  }
}
