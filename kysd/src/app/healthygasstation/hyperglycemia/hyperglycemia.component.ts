import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../../api/apiservice.service';
import {Zylazy} from '../../base/lazy';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-hyperglycemia',
  templateUrl: './hyperglycemia.component.html',
  styleUrls: ['./hyperglycemia.component.less']
})
export class HyperglycemiaComponent implements OnInit {

  constructor(private api:ApiserviceService,
              private routerInfo: ActivatedRoute,
              private lazy: Zylazy) { }
  public id: number;
  public contentId: number;
  public content;
  public static: boolean = false;
  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.id = parseInt(params["id"]);
      this.contentId = parseInt(params["contetId"]);
      console.log(this.contentId);
    });
    this.content = this.api.getheathcontent()[this.contentId]['content'];
    console.log(this.content);
    // 窗口改变
    window.addEventListener('resize', () => {
      if (window.innerWidth > 670) {
        this.static = true;
      }
    }, false);
  }

  ngAfterViewInit() {
    // 懒加载
    const loadImages = this.lazy.lazyload();
    loadImages(); //初始化首页的页面图片
    window.addEventListener('scroll', this.lazy.throttle(loadImages, 500, 1000), false);
  }

}
