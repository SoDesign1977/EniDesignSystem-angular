import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'eni-listcheckbox',
  templateUrl: './eni-listcheckbox.component.html',
  styleUrls: ['./eni-listcheckbox.component.scss']
})
export class EniListcheckboxComponent implements OnInit {

  constructor() { }

  @Input()
  legend:string = "Label"

  @Input()
  ListCheckox:checkboxInterface[] = []

  @Input()
  required:boolean = false

  @Input()
  name:string = "test"

  @Input()
  value:string[] = []
 
  


   IsDisabled = (element:checkboxInterface)=>{
    return element.disabled  ? "disabled" : "";
  }
  IsSelected = (element:checkboxInterface)=>{
    return this.value.includes(element.value) ? "selected" : ""
  }
  IsChecked = (element:checkboxInterface)=>{
    return this.value.includes(element.value)
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
interface checkboxInterface {
  value:string,
  disabled:boolean,
  checked:boolean,
}