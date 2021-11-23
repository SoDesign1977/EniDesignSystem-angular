import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-eni-tabs',
  templateUrl: './eni-tabs.component.html',
  styleUrls: ['./eni-tabs.component.scss']
})
export class EniTabsComponent implements OnInit {

  constructor() { }

  @Input()
  Selected:number = -1

  @Input()
  Tabs:tabsInterface[] = []

  TabsShow(index:number,vartrue:any,varfalse:any){
    return this.Selected === index ? vartrue : varfalse;
  }
  setTabs(index:number){
    this.Selected = index;
  }
  ngOnInit(): void {
  }

}
interface tabsInterface {
  icon:string,
  title:string,
  components:string,
  disabled:boolean
}
