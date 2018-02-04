import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {
  public diseases;
  public serves;
  constructor() { }

  // 常见疾病
  setdise(list) {
    this.diseases = list;
  }

  getdise() {
    return this.diseases;
  }

  setService(serves) {
    this.serves = serves;
  }
  getService() {
    return this.serves;
  }
}
