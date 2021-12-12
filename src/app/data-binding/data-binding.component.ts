import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://loiane.com';

  variavelCursoAngular : boolean = true;
  urlImagem : any = 'https://mpolitano.com.br/wp-content/uploads/2017/05/lorempixel.jpg';

  MetodoGetValor(){
    return 1*2;
  }

  getCurtirCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
