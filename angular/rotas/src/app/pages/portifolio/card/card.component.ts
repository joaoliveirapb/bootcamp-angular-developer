import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {
    this.activeRoute.params.subscribe(res => console.log(res)) // Recuperando: http://localhost:4200/portifolio/{1}
    this.activeRoute.firstChild?.params.subscribe(res => console.log(res))

    this.activeRoute.queryParams.subscribe(res => console.log(res)) // Recuperando: http://localhost:4200/portifolio/1?{name=joao&token=123}
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/']) // Forçando o navegador voltar para a página inserida
    // }, 5000)
  }

}
