import { Component, OnInit,AfterContentChecked,Input } from '@angular/core';

@Component({
  selector: 'lib-eni-selectcheckbox',
  templateUrl: './eni-selectcheckbox.component.html',
  styleUrls: ['./eni-selectcheckbox.component.scss']
})
export class EniSelectcheckboxComponent implements AfterContentChecked {

  constructor() { }
  @Input()
  items:Selectinterface[] = []

  @Input()
  title:string = "Vous êtes ici :"

  @Input()
  required:boolean = false

  @Input()
  disabled:boolean = false

  @Input()
  errorMessage:string = ""
  @Input()
  placeholder:string = ""

  @Input()
  name:string = ""


  @Input()
  value:string[] = []

  @Input()
  open:boolean = false
  @Input()
  addCateg:boolean = false
 
  @Input()
  CategItems:any[] = []
 
   handleChange(data:string){
    if (this.value.includes(data)) {
       this.value= this.value.filter(function (val) {
          return val !== data;
        })
     
    } else {
      this.value=[...this.value, data]
    }
  };
   OpenSelect(bool:boolean){
    if (!this.disabled) {
      this.open = bool
    }
  };
  setvalue(element:any){
    if (!element.disabled) {
      this.handleChange(element.value)
    }
  };
  Condition(variable:Boolean,vartrue:any,varfalse:any){
    return  variable ? vartrue : varfalse;
  }

  IsOpen(vartrue:any,varfalse:any){
    return this.open ? vartrue : varfalse;
  }
  ngAfterContentChecked(): void {
    this.CategItems=[];
    this.items.forEach((element:any) => {
          let w = this.CategItems.findIndex((el)=> el.name === element.categorie)
          if (w<0) {
            this.CategItems.push({
              name:element["categorie"],
              Items:[]
            });
            this.addCateg = true;
          }
          let x = this.CategItems.findIndex((el)=> el.name === element.categorie);
          this.CategItems[x].Items.push(element);
    });
 
}
}
interface Selectinterface {
  value:string,
  disabled?:boolean,
  categorie?:string
}