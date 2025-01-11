import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavKeepContentComponent } from './nav-keep-content/nav-keep-content.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NavKeepContentComponent],
  imports: [
    CommonModule,
    NgbModule
  //  NgbPaginationModule,
   // NgbAlertModule
  ],
  exports: [NavKeepContentComponent],
  bootstrap: [NavKeepContentComponent]
})
export class NavKeepContentModule { }
