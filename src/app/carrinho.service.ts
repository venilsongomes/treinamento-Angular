import { Injectable } from '@angular/core';
import { IProdutCarrinho } from './produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutCarrinho[] = [];

  constructor() { }

  obterCarrinho(){
   this.itens =  JSON.parse(localStorage.getItem("carrinho") || "");
    return this.itens;
  }
  adicionarAocarrinho(produto: IProdutCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  
  }
  limparCarrinho(){
      this.itens =[];
      localStorage.clear();
  }
  removerProdutosCarrinho(produtoId: number){
    this.itens.filter(itens =>itens.id == produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));


  }

}