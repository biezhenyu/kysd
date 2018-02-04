import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { url, localurl } from '../../base/config';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.less']
})
export class DetailInfoComponent implements OnInit {
  @ViewChild('detail') detail: ElementRef;

  constructor() { }
  public name: string;
  public icon: string = `../${localurl}/assets/jkimages/personTag.png`;
  ngOnInit() {
    this.name = sessionStorage.getItem('name');
    this.icon = sessionStorage.getItem('icon');
  }

  ngAfterViewInit() {
    this.detail.nativeElement.style.height = window.innerHeight + 'px';
  }

}
