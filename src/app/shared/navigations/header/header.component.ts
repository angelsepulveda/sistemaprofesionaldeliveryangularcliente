import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  canShowSearchAsOverlay = false
  @Input() collapsed = false
  @Input() screenWidth = 0

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
  }


  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth)
  }

  getHeaderClass(): string {
    let styleClass: string

    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'header-trimmed'
    }else{
      styleClass = 'header-md-screen'
    }

    return styleClass
  }
  checkCanShowSearchAsOverlay(innerWidth: number): void{
    this.canShowSearchAsOverlay = innerWidth < 845;
  }

}
