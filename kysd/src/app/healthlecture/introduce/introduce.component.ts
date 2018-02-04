import { Component, OnInit } from '@angular/core';
import { url, localurl } from '../../base/config';
import {ApiserviceService} from '../../api/apiservice.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.less']
})
export class IntroduceComponent implements OnInit {

  constructor(private api: ApiserviceService) { }
  public imageurls = [`../${localurl}/assets/jkimages/jk1.png`, `../${localurl}/assets/jkimages/jk2.png`, `../${localurl}/assets/jkimages/jk3.png`];
  public count:number;


  ngOnInit() {
    this.api.getconsultCount().subscribe((res) => {
      this.count = parseInt(res);
    }, (error) => {
      console.log(error);
    });
  }
}
