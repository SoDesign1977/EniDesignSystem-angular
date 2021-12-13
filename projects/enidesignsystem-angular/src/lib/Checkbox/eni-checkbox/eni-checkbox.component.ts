import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eni-checkbox',
  templateUrl: './eni-checkbox.component.html',
  styleUrls: ['./eni-checkbox.component.scss']
})
export class EniCheckboxComponent implements OnInit {

  constructor() { }

  @Input()
  title:string = "Label"

  @Input()
  checked:boolean = false


  @Input()
  name:string = "test"

  @Input()
  disabled:boolean = false
 
  
  setchecked = ()=>{
    this.checked = !this.checked
  }

   valueIsDisabled = ()=>{
    return this.disabled  ? "disabled" : "";
  }
  valueIsSelected = ()=>{
    return this.checked  ? "selected" : "";
  }
  ngOnInit(): void {
  }

}
