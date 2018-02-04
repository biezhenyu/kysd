import { Injectable } from '@angular/core';

@Injectable()
export class CheckService {
  constructor() { }

  checkPhone(phone: string): boolean {
    if (!phone) return false;
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      return false;
    } else {
      return true;
    }
  }
}
