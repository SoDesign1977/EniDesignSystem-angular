import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'lib-eni-squarecheckbox',
  templateUrl: './eni-squarecheckbox.component.html',
  styleUrls: ['./eni-squarecheckbox.component.scss']
})
export class EniSquarecheckboxComponent implements OnInit {

  constructor() { }

  @Input()
  icon:string = ""

  @Input()
  disabled:boolean= false


  @Input()
  required:boolean = false

  @Input()
  name:string = "test"

  @Input()
  title:string = "non"

  @Input()
  value:boolean = false
 
  


IsSelected = ()=>{
  return this.value ? "selected" : ""
}
IsDisabled = ()=>{
  return this.disabled ? "disabled" : "";
}
handleChange = () => {
  if(!this.disabled)
  this.value = !this.value
};
  ngOnInit(): void {
  }

}
