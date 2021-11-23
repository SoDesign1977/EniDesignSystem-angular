import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-eni-button',
  templateUrl: './eni-button.component.html',
  styleUrls: ['./eni-button.component.scss']
})
export class EniButtonComponent implements OnInit {

  constructor() { }
  @Input()
  state:string = "primary"
  @Input()
  title:string = "title"

  @Input()
  arrow:boolean = false

  @Input()
  disabled:boolean = false

  ngOnInit(): void {
  }

}
