import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'eni-status',
  templateUrl: './eni-status.component.html',
  styleUrls: ['./eni-status.component.scss']
})
export class EniStatusComponent implements OnInit {

  constructor() { }
  @Input()
  message:string = "title"

  @Input()
  state:string = ""

  ngOnInit(): void {
  }

}
