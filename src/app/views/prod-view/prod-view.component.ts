import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/Objetos/Produtos';
import { ProdutoService } from 'src/app/service/produto.service';




@Component({
  selector: 'app-prod-view',
  templateUrl: './prod-view.component.html',
  styleUrls: ['./prod-view.component.css']
})
export class ProdViewComponent implements OnInit {
  prod: any;
  produtos: Array<Produto> = [];
  carregarLoading: boolean = false;

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {

   this.produtoService.listar().subscribe(prods => {

    setTimeout(()=>{
      this.carregarLoading = true;
      this.produtos = prods
    },100)
   })
  }

  excluirItem = (id:any)=>{
    this.produtoService.excluirItem(id).subscribe(
      success=>console.log('excluiu'),
      error => console.log('Deu ruim'),
      ()=>console.log('Requisição completa')
      )
      this.ngOnInit();
  }
  editar = (id:any)=>{

    this.router.navigate(['cadastro',id])

  }
}
