import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'eni-breadcrumb',
  templateUrl: './eni-breadcrumb.component.html',
  styleUrls: ['./eni-breadcrumb.component.scss']
})
export class EniBreadcrumbComponent implements OnInit {

  constructor() { }
  @Input()
  arianne:object[] = [{}]

  @Input()
  message:string = "Vous êtes ici :"

  ngOnInit(): void {
  }


  current(index:number,arianne:object[]):string{
    return index+1 === arianne.length ? "page" : "false"
  }
}
