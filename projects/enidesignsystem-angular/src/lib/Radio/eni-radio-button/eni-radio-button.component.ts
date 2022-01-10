import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({

  selector: 'eni-radio-button',
  templateUrl: './eni-radio-button.component.html',
  styleUrls: ['./eni-radio-button.component.scss']
})
export class EniRadioButtonComponent implements OnInit {

  constructor() { }


  @Input()
  radio:radioInterface[] = []

  @Input()
  title:string = "Vous êtes ici :"

  @Input()
  required:boolean = false

  @Input()
  name:string = ""


  @Input()
  value:string = ""
 
   valueSetter = (element:radioInterface)=>{
    if (!element.disabled) {
      this.value=element.value;
    }
  }
   valueIsCheck = (element:radioInterface)=>{
    return this.value===element.value ? "checked " : "";
  }
   valueIsDisabled = (element:radioInterface)=>{
    return element.disabled ? "disabled" : "";
  }

  ngOnInit(): void {
  
    this.radio.forEach((element) => {
      if (element.checked === true && this.value === "") {
        this.value = element.value;
      }
    });
 
 
  }

}
interface radioInterface {
  value:string,
  disabled?:boolean,
  checked?:boolean
}