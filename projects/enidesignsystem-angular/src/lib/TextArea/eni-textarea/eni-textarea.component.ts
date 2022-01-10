import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'eni-textarea',
  templateUrl: './eni-textarea.component.html',
  styleUrls: ['./eni-textarea.component.scss']
})
export class EniTextareaComponent implements OnInit {

  constructor() { }


  @Input()
  title:string = "Vous êtes ici :"

  @Input()
  placeholder:string = ""

  @Input()
  errorMessage:string = ""

  @Input()
  required:boolean = false

  @Input()
  name:string = ""

  @Input()
  row:number = 4

  @Input()
  col:number = 50

  @Input()
  disabled:boolean = false
 
  @Input()
  minLength:number = 0

  @Input()
  maxLength:number = 0

  @Input()
  value:string = ""
  @Output() myValueChange = new EventEmitter<string[]>();

  setValue = (val:string)=>{
    this.value = val
  }
  valueIsRequired = ()=>{
    return this.required ? "required" : "";
  }
   valueIsDisabled = ()=>{
    return this.disabled  ? "disabled" : "";
  }
  GetTextareaLength = ()=>{
    return this.maxLength>0 ? (this.maxLength - this.value.length) : this.value.length
  }
  GetMaxLength = ()=>{
  
    if(this.maxLength===0){
      console.log("yess")
      return false
    }

      return this.maxLength
   

  }


  ngOnInit(): void {
  }

}
