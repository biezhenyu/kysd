import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../api/apiservice.service';

@Component({
  selector: 'app-healthconsult',
  templateUrl: './healthconsult.component.html',
  styleUrls: ['./healthconsult.component.less']
})
export class HealthconsultComponent implements OnInit {

  constructor(private api: ApiserviceService) { }
  public healthList = ['脑梗专栏', '高血压专栏', '高血脂专栏', '高血糖专栏', '肺心病专栏', '心梗专栏', '代谢类疾病专栏', '痛风专栏', '皮肤病专栏', '痛症专栏', '便秘专栏'];
  ngOnInit() {
    this.api.getcardioCerebralList().subscribe((res) => {
      this.healthList = res['list'];
      sessionStorage.setItem('list1', JSON.stringify(this.healthList));
    })
  }



























}
