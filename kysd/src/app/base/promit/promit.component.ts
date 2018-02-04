import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promit',
  templateUrl: './promit.component.html',
  styleUrls: ['./promit.component.less']
})
export class PromitComponent implements OnInit {
  private promit:string;

  private index:number = 0;

  public promitShow:boolean = false;
  public timer;
  constructor() { }

  ngOnInit() {
  }

  _colse() {
    this.timer = null;
    this.timer = setTimeout(() => {
      this.index --;
      if (this.index === 0) {
        this.promitShow = false;
        clearInterval(this.timer);
        return;
      }
      this._colse();
    }, 1000);
  }

  promitClose(text:string) {
    this.promit = text;
    this.promitShow = true;
    this.index = 3;
    this._colse();
  }

}
