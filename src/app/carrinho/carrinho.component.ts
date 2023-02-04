 import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutCarrinho } from '../produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
itensCarrinho: IProdutCarrinho[] = [];
total = 0;

  constructor( public carrinhoService: CarrinhoService, private router: Router
    
    ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularPreco();
  
  }
  calcularPreco(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade),0 );
  }
  removerProdutosCarrinho(produtoId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
    this.carrinhoService.removerProdutosCarrinho(produtoId);   
    this.calcularPreco();  
  }
  comprar(){
     alert(" Compra Finalizada com sucesso !!!");
     this.carrinhoService.limparCarrinho();
     this.router.navigate(["produtos"]);

  }
  

}
