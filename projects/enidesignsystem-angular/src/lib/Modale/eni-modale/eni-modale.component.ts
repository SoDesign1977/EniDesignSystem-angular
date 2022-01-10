import { Component, OnInit,Input ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'eni-modale',
  templateUrl: './eni-modale.component.html',
  styleUrls: ['./eni-modale.component.scss']
})
export class EniModaleComponent implements OnInit {
  @ViewChild('username') input: ElementRef<HTMLInputElement> | undefined;
  constructor() {
   }
   @Input()
   title:string = "error"
 
  @Input()
  state:string = "error"

  @Input()
  openStatus:boolean = false

  @Input()
  closeButton:boolean = true

  @Input()
  openclass:string = ""

  @Input()
  closeAction:Function = ()=>{}
  
  ngOnInit(): void {
    if(!this.openStatus){
      this.openclass = "eni-close"
    }
    console.log(this.input);
  }

}
