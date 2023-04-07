import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  products:string[] = [];
  menuType:string = 'superuser';

  constructor() {
    this.products = ['Mouse', 'teclado', 'cabo', 'fonte', 'Monitor'];
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.products.pop()
  }

  remove(index:number) {
    this.products.splice(index, 1);
  }

}
