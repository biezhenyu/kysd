import { Component, OnInit } from '@angular/core';
import {Zylazy} from '../../base/lazy';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiserviceService} from '../../api/apiservice.service';

@Component({
  selector: 'app-mi',
  templateUrl: './mi.component.html',
  styleUrls: ['./mi.component.less']
})
export class MiComponent implements OnInit {

  constructor(private api:ApiserviceService,
              private routerInfo: ActivatedRoute,
              private lazy: Zylazy) { }
  public contentId: number;
  public content;
  public static: boolean = false;
  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      this.contentId = parseInt(params["contetId"]);
    });
    this.content = this.api.getheathcontent()[this.contentId]['content'];
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
