import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {

  public loadingShow:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  _showLoading() {
    this.loadingShow = true;
  }

  _closeLoading() {
    this.loadingShow = false;
  }

}
