import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  style:string = '';
  background:string = 'red';
  colorFont:string = 'yellow';
  item:string = '';
  list:string[] = [];
  isEnableBlock:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeClass() {
    if(this.style === '') {
      this.style = 'enable';
    } else if(this.style === 'enable') {
      this.style = 'disable'
    } else {
      this.style = 'enable'
    }
  }

  addList() {
    this.list.push(this.item);
  }

}
