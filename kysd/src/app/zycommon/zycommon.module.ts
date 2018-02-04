import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromitComponent } from '../base/promit/promit.component';
import { LoadingComponent } from '../base/loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    PromitComponent
  ],
  exports: [
    LoadingComponent,
    PromitComponent
  ]
})
export class ZycommonModule { }
