import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare let WeixinJSBridge;
@Component({
  selector: 'app-consult-success',
  templateUrl: './consult-success.component.html',
  styleUrls: ['./consult-success.component.less']
})
export class ConsultSuccessComponent implements OnInit {
  @ViewChild('success') success:ElementRef;
  constructor() { }
  public num: number = 3;
  ngOnInit() {
    this.success.nativeElement.style.height = window.innerHeight + 'px';
  }
  close() {
    WeixinJSBridge.call('closeWindow');
  }
}
