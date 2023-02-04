import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotifyService } from 'src/app/notify.service';
import { IProdutCarrinho, IProduto } from 'src/app/produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})

export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade  = 1;

  
  constructor( private produtosService: ProdutosService,
                private route: ActivatedRoute,
                   private notifyservice: NotifyService,
                    private carrinhoService: CarrinhoService
                ){ }

                
  ngOnInit(): void {
    
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notifyservice.notificar("O produto foi adicionado no Carrinho");

    const produto: IProdutCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
  
   this.carrinhoService.adicionarAocarrinho(produto);
  }

}
