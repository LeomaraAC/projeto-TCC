import { PermissoesTelas } from '../../../model/grupos/allGroups.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ListaPermissoesSevices {
  private _itens: PermissoesTelas[] = [];
  constructor () {}

  get getItens(): PermissoesTelas[] {
    return  this._itens;
  }

  /* Retornar o id dos itens  */
  getItensId(): number[] {
    const idItens: number[] = this._itens.map((item) => item.idTelas);
    return idItens;
  }
  /* Quantidade de itens */
  quantityItems (): number {
    return this._itens.length;
  }

  private _sort () {
    this._itens.sort((item1, item2) => (item1.nomeTela <  item2.nomeTela) ? -1 : 1);
  }

  /* Função para verificar se um item esta selecionado */
  isSelected(row) {
    const tela = this._itens.filter(item => item.idTelas === row.idTelas).length;
    return tela !== 0;
  }

  /* Função para marcar ou desmarcar um item */
  changeValue (row ) {
    this.isSelected(row) ?  this.removeValue(row) : this._itens.push(row);
    this._sort();
  }

  /* Função para remover um item */
  removeValue (row: PermissoesTelas) {
    if (this.isSelected) {
    const indexRow = this._returnIndex(row);
    this._itens.splice(indexRow, 1);
    }
  }
  /* Limpar a lista */
  clear() {
    this._itens = [];
  }

  /* Função responsável por retornar o index da linha */
  private _returnIndex(row): number {
    let index = -1;
    let cont = 0;
    for (const element of this._itens) {
     if (element.idTelas === row.idTelas) {
       index = cont;
     }
     cont++;
    }
    return index;
  }
}
