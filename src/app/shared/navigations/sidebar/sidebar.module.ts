import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { SublevelMenuComponent } from "./sub-level-menu.component";



@NgModule({
  declarations: [
    SidebarComponent,
    SublevelMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,

  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
