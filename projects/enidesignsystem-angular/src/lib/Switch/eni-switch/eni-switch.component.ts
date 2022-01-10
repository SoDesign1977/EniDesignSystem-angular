import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'eni-switch',
  templateUrl: './eni-switch.component.html',
  styleUrls: ['./eni-switch.component.scss']
})
export class EniSwitchComponent implements OnInit {

  constructor() { }


  @Input()
  title:string = "Label"

  @Input()
  checked:boolean = false

  @Input()
  required:boolean = false

  @Input()
  name:string = "test"

  @Input()
  disabled:boolean = false
 
  
  setchecked = ()=>{
    this.checked = !this.checked
  }
  valueIsRequired = ()=>{
    return this.required ? "required" : "";
  }
   valueIsDisabled = ()=>{
    return this.disabled  ? "disabled" : "";
  }
  ngOnInit(): void {
  }

}
