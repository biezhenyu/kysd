import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiserviceService} from '../../api/apiservice.service';
import {LoadingComponent} from '../../base/loading/loading.component';
import {PromitComponent} from '../../base/promit/promit.component';
import { Router } from '@angular/router';

declare let BScroll;

@Component({
  selector: 'app-my-consult',
  templateUrl: './my-consult.component.html',
  styleUrls: ['./my-consult.component.less']
})
export class MyConsultComponent implements OnInit {
  @ViewChild('zypromit') zypromit: PromitComponent;
  @ViewChild('zyloading') zyloading: LoadingComponent;
  @ViewChild('myconsult') myconsult: ElementRef;

  public pagecount:number;
  public tatal: number;
  public currentPage: number = 1;
  public xialaShow:boolean = false;
  public list: any = [];
  public scroll;
  constructor(private api: ApiserviceService,
              private router: Router) { }

  ngOnInit() {

    // 获取总数
    this._getTotal();
  }

  getscroll(event: any) {
    event.on('touchEnd', (pos) => {
      if (pos.y < (event.maxScrollY - 20)) {
        this._changData(1, event);
      }
    });
  }
  _changData(state:number, event:any) {
    if (this.currentPage === this.pagecount) return;
    this.xialaShow = true;
    this.currentPage ++;
    this._getList(this.tatal, this.currentPage);
  }

  // 获取总页数
  _getTotal() {
    this.zyloading._showLoading();
    this.api.gettotal().subscribe((res) => {
      this.pagecount = res['pageCount'];
      this.tatal = res['size'];
      this._getList(this.tatal, this.currentPage);
    }, (error) => {
      this.zyloading._closeLoading();
      this.zypromit.promitClose(error.error.message);
    });
  }

  // 获取当前页的数据
  _getList(size, page) {
    if (this.currentPage === 1) this.zyloading._showLoading();
    this.api.getConsultList(size, page).subscribe((res) => {
      this.zyloading._closeLoading();
      this.list = this.list.concat(res);
      this.xialaShow = false;
      // 滚动
      if (this.currentPage === 1) {
        setTimeout(() => {
          this.scroll = new BScroll(this.myconsult.nativeElement, {click: true});
          this.getscroll(this.scroll);
        }, 20);
      }
    }, (error) => {
      this.zyloading._closeLoading();
      if (error.status != 200) {
        this.zypromit.promitClose(error.error.message);
      }
    });
  }

  // 咨询详情
  consultClick(info) {
    this.router.navigate(['/housekeeper/consultdetail', info.id])
  }

  ngAfterViewInit() {
    this.myconsult.nativeElement.style.height = window.innerHeight + 'px';
  }
}
