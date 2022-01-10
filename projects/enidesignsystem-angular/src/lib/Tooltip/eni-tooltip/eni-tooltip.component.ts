import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'eni-tooltip',
  templateUrl: './eni-tooltip.component.html',
  styleUrls: ['./eni-tooltip.component.scss']
})
export class EniTooltipComponent implements OnInit {

  constructor() { }

  @Input()
  state:string = "top"

  @Input()
  ariaId:string = ""

  @Input()
  title:string = "title"

  ngOnInit(): void {
  }

}
