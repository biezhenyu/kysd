import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
declare let BScroll;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {

  constructor() { }
  @ViewChild('slider') silderEl:ElementRef;
  @ViewChild('slideGroup') sliderGroup:ElementRef;

  @Input()
  public loop:boolean = true;
  @Input()
  public autoplay: boolean = true;
  @Input()
  public interval: number = 4000;
  private silder;
  private timer;
  private currentPageIndex:number = 0;
  private children;
  public dots;
  ngOnInit() {
    setTimeout(() => {
      this._setSliderWidth(false);
      this._initDots();
      this._initSlider();
      if (this.autoplay) {
          this._play();
      }
    }, 20);
    let self = this;
    // 窗口改变
    window.addEventListener('resize', function () {
      if (!self.silder) {
          return;
      }
      self._setSliderWidth(true);
      self.silder.refresh();
    });
  }

  // 初始化
  _initSlider():void {
    var self = this;
    this.silder = new BScroll(this.silderEl.nativeElement, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.loop,
        threshold: 0.3,
        speed: 400
      },
      click: true
    });
    this.silder.on('scrollEnd', function () {
      let pageIndex = this.getCurrentPage().pageX;
      self.currentPageIndex = pageIndex;
      if (self.autoplay) {
        self._play();
      }
    });
    this.silder.on('touchend', () => {
      if (self.autoplay) {
        self._play();
      }
    });
    this.silder.on('beforeScrollStart', function () {
      if (self.autoplay) {
        clearTimeout(self.timer);
      }
    });
  }

  // 设置轮播图的宽度
  _setSliderWidth(isResize):void {
    this.children = this.sliderGroup.nativeElement.children;
    let width = 0;
    let sliderWidth = this.sliderGroup.nativeElement.clientWidth;
    for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        child.className = 'slider-item';
        child.style.width = sliderWidth + 'px';
        width += sliderWidth;
    }
    if (this.loop && !isResize) {
        width += 2 * sliderWidth;
    }
    this.sliderGroup.nativeElement.style.width = width + 'px';
  }

  // 初始化dots
  _initDots():void {
    this.dots = new Array(this.children.length);
  }

  // 播放
  _play():void {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.silder.next();
    }, this.interval);
  }

}
