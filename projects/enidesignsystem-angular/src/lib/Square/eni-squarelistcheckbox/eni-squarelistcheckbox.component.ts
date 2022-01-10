import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'eni-squarelistcheckbox',
  templateUrl: './eni-squarelistcheckbox.component.html',
  styleUrls: ['./eni-squarelistcheckbox.component.scss']
})
export class EniSquarelistcheckboxComponent implements OnInit {

  constructor() { }
  @Input()
  legend:string = "Label"

  @Input()
  ListSquare:squareInterface[] = []

  @Input()
  required:boolean = false

  @Input()
  name:string = "test"

  @Input()
  value:string[] = []
 
  

conditional = (variable:any,equal:any,vartrue:any,varfalse:any)=>{
  return variable === equal ? vartrue : varfalse
}
IsSelected = (element:squareInterface)=>{
  return this.value.includes(element.value) ? "selected" : ""
}
IsDisabled = (element:squareInterface)=>{
  return element.disabled ? "disabled" : "";
}
handleChange = (data:string) => {
  if (this.value.includes(data)) {
    this.value =  this.value.filter(function (val) {
        return val !== data;
      })
  } else {
    this.value = [...this.value, data];
  }
};
  ngOnInit(): void {
  }

}
interface squareInterface {
  value:string,
  icon:string,
  disabled:boolean,
}