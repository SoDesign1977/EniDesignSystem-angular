import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eni-input',
  templateUrl: './eni-input.component.html',
  styleUrls: ['./eni-input.component.scss']
})
export class EniInputComponent implements OnInit {

  constructor() { }

  @Input()
  required:boolean = false
  @Input()
  disabled:boolean = false
  @Input()
  title:string = "";  
  @Input()
  placeholder:string = "Placeholder";
  @Input()
  name:string = "";
  @Input()
  errorMessage:string = ""
  @Input()
  type:string = ""


  ngOnInit(): void {
  }

}
