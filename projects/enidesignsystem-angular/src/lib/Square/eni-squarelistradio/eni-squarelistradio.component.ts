import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-eni-squarelistradio',
  templateUrl: './eni-squarelistradio.component.html',
  styleUrls: ['./eni-squarelistradio.component.scss']
})
export class EniSquarelistradioComponent implements OnInit {

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
  value:string = ""
 
  

conditional = (variable:any,equal:any,vartrue:any,varfalse:any)=>{
  console.log(variable,equal)
  return variable === equal ? vartrue : varfalse
}
IsSelected = (element:squareInterface)=>{
  return this.value.includes(element.value) ? "selected" : ""
}
IsDisabled = (element:squareInterface)=>{
  return element.disabled ? "disabled" : "";
}
   handleChange = (data:string) => {
   this.value = data
  };

  ngOnInit(): void {
  }

}
interface squareInterface {
  value:string,
  icon:string,
  disabled:boolean,
}