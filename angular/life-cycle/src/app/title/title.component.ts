import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() name: string = '';

  constructor() {
    console.log(`Construtor ${this.name}`);
  }

  ngOnInit(): void {
    this.name += 'X';
    console.log(`OnInit ${this.name}`);
  }

  ngOnChanges(): void {
    console.log(`OnChanges ${this.name}`);
  }

}
