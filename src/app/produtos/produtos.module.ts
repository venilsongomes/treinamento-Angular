import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ProdutosComponent},
  {path: ':id', component: DetalhesProdutoComponent}
];

@NgModule({
imports: [RouterModule.forChild(routes), CommonModule,
  ProdutosRoutingModule,
  FormsModule
],
exports: [RouterModule],

  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent
  ],
  
})
export class ProdutosModule { }
