import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ApiserviceService} from '../../api/apiservice.service';

@Component({
  selector: 'app-specialcolumn',
  templateUrl: './specialcolumn.component.html',
  styleUrls: ['./specialcolumn.component.less']
})
export class SpecialcolumnComponent implements OnInit {

  constructor(private routeInfo: ActivatedRoute, private api:ApiserviceService) { }
  public list: Array<any>;
  public id: string;
  public listindex: number;
  public routes: any[] = ['/gasstation/content', '/gasstation/hypertension', '/gasstation/hyperlipemia', '/gasstation/hyperglycemia', '/gasstation/heart',
  '/gasstation/mi', '/gasstation/supersession', '/gasstation/gout', '/gasstation/skin', '/gasstation/pain', '/gasstation/astricttion'];
  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => this.id = params["id"]);
    this.api.getlistContent(this.id).subscribe((res) => {
      this.list = res['sortList'];
      this.api.setheathcontent(this.list);
    });
    this.listindex = parseInt(this.id);
  }

}
