import { Component,Input,Output, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-eni-alert',
  templateUrl: './eni-alert.component.html',
  styleUrls: ['./eni-alert.component.scss']
})
export class EniAlertComponent implements OnInit {
  @Input()
  state:string = "success"
  @Input()
  message:string = "Contenu du message d'information"
  @Input()
  linkMessage?:string = ""
  @Input()
  linkUrl?:string = ""
  

  constructor() { }

  ngOnInit(): void {
  }

}
