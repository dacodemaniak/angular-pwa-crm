import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsRoutingModule } from './params-routing.module';
import { HomeComponent } from './page/home/home.component';
import { AddComponent } from './page/company/add/add.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyService } from './services/company.service';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ParamsRoutingModule,
    SharedModule
  ],
  providers: [
    CompanyService
  ]
})
export class ParamsModule { }
