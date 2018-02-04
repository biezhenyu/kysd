import { Injectable } from '@angular/core';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from "@angular/common/http";
import {url, localurl} from '../base/config';

@Injectable()
export class ApiserviceService {

  constructor(public $http: HttpClient) { }
  public heathcontent;

  getcardioCerebralList() {
    return this.$http.get(`../${localurl}/assets/data/health/healthlist.json`);
  }

  getlistContent(num:string) {
    return this.$http.get(`../${localurl}/assets//data/health/healthlistcontent${num}.json`);
  }

  // heathcontent
  setheathcontent(con):void {
    this.heathcontent = con;
    sessionStorage.setItem('content', JSON.stringify(con));
  }

  getheathcontent(): object {
    return this.heathcontent || JSON.parse(sessionStorage.getItem('content'));
  }

  // 咨询人次总数
  getconsultCount() {
    return this.$http.get(`../${localurl}/consult/consultCount`, {
      responseType: 'text'
    });
  }

  // 获取常见疾病列表
  findAllCommonDisease() {
    return this.$http.get(`../${localurl}/dict/findAllCommonDisease`, {});
  }

  // 获取服务分类
  findAllServiceClass() {
    return this.$http.get(`../${localurl}/dict/findAllServiceClass`, {});
  }

  // 判断客户是否第一次咨询
  isConsult() {
    return this.$http.get(`../${localurl}/user/isNeedToVerification`, {});
  }

  // 获取验证码
  getMobileVerifyCode(moble: string) {
    let params:HttpParams = new HttpParams().set("mobile", moble);
    return this.$http.post(`../${localurl}/message/getMobileVerifyCode?mobile=${moble}`, {});
  }

  // 咨询
  consult(options) {
    return this.$http.post(`../${localurl}/consult/addConsultSvcnote`, options);
  }

  // 获取客户称呼和电话号码
  findUserCallAndName() {
    return this.$http.get(`../${localurl}/user/findUserCallAndName`, {});
  }

  // 判断号码是否改变
  isUserMobileChange(moble: string) {
    let params:HttpParams = new HttpParams().set("mobile", moble);
    return this.$http.get(`../${localurl}/user/isUserMobileChange`, {
      params: params,
      responseType: 'text'
    });
  }

  // 获取用户头像地址
  getuserIcon() {
    return this.$http.get(`../${localurl}/user/findUserPicUrl`);
  }

  // 获取用户信息
  findUserDeatils() {
    return this.$http.get(`../${localurl}/user/findUserDeatils`);
  }

  // 首先获取总数与总页数
  gettotal() {
    return this.$http.get(`../${localurl}/consult/CalculateConsultSvcnoteSize`);
  }

  // 获取资讯数据
  getConsultList(size, pageNum) {
    let params:HttpParams = new HttpParams().set("size", size).set('pageNum', pageNum);
    return this.$http.get(`../${localurl}/consult/findConsultSvcnoteList`, {
      params: params
    });
  }

  // 获取咨询单详情
  getconsultDetail(id) {
    let params:HttpParams = new HttpParams().set("consultId", id);
    return this.$http.get(`../${localurl}/consult/findConsuleDeatils`, {
      params: params
    });
  }
}
