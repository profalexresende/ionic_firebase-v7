import { Component, OnInit } from '@angular/core';

// Importação do Serviço de Produto
import { ProdutoService } from './../../services/produto.service';
// Importação da classe de Produto
import { Produto } from './../../models/Produto';
// Importação da classe responsavel pelo gerenciamento de rotas
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  // Intância uma classe para o Produto
  produto: Produto = new Produto();

  constructor(
    private prodService: ProdutoService, // Instancia o serviço do produto na variável prodService
    private route: Router // Instancia o gerenciador de rotas
  ) { }

  ngOnInit() {
  }

  // Método para salvar um produto no Firebase
  salvar() {
    // Utiliza o serviço de Produtos para salvar um registro no Firebase
    this.prodService.salvar(this.produto);
    // Volta para a página Home
    this.route.navigateByUrl('/');
  }
}
