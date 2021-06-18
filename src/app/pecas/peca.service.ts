import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peca } from './peca';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

 baseUrl = "http://localhost:3000/pecas"
  pecas: any;
  

  constructor(private http : HttpClient) {


    
  }


 public  getPecas() : Observable<Peca[]> {
    
    return this.http.get<Peca[]>(this.baseUrl)
  }

  
  public getPeca(cod: string) {
    for (let peca of this.pecas) {
      if (peca.getCod == cod) {
        return peca
      }
    }
    return undefined
  }


  public atualizaQuantidadePeca(cod: string, quantidade: number) {
    for (let peca of this.pecas) {
      if (peca.getCod == cod) {
        peca.setQuantidade = quantidade
      }
    }
  }

  public addPeca(cod: string, descricao: string, quantidadeDisponivel: number, quantidadeMinima: number, capacidadeMaxima: number, preco: number, loja: string) {
    this.pecas.push(new Peca(cod, descricao, quantidadeDisponivel, quantidadeMinima, capacidadeMaxima, preco, loja))

  }

  private ordenar(arr: Peca[]) {
    arr.sort((a, b) => (
      a.getQuantidadeDisponivel / a.getQuantidadeMinima <
      b.getQuantidadeDisponivel / b.getQuantidadeMinima) ? -1 : 1);
  }


}
