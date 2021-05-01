export class Produto{

  constructor(public id: any, public nome:string, public preco: number, public desconto: number){

  }

  public precoDesconto = (preco: number)=>{
    return preco - this.desconto;
  }

}
