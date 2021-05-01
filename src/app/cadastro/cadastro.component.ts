import { Produto } from './../Objetos/Produtos';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import {DiasDaSemana} from './../dias-da-semana.enum'
import { ProdutoService } from './../service/produto.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  id: any
  produto: Produto = new Produto(0,'', 0,0);
  textoBotao : string = 'Salvar';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodService: ProdutoService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(parametros =>{

      if(parametros['id']!=0){
        this.textoBotao = 'Editar'
        this.id = parametros['id']
        this.prodService.buscarItemId(this.id).subscribe(prods =>{
          this.produto = prods
        })
      }
    })
  }




  addItem =()=>{
    if(this.textoBotao == 'Salvar'){
      this.prodService.addItem(this.produto).subscribe(
        success=>this.navegar('view'),
        error => console.log('Falhou'),
        () => console.log('Requisição completa'))

    }else{
      this.editar();
    }
  }
  editar =()=>{
    this.prodService.editar(this.produto).subscribe(
      success=> this.navegar('view'),
      error => console.log('Falhou'),
      () => console.log('Requisição completa'))

  }

  navegar = (rota: any)=>{
    this.router.navigate([rota])
  }
}
