import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarProdutoPageRoutingModule } from './alterar-produto-routing.module';

import { AlterarProdutoPage } from './alterar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarProdutoPageRoutingModule
  ],
  declarations: [AlterarProdutoPage]
})
export class AlterarProdutoPageModule {}
