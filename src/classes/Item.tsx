export default class Item {

  id : number;
  url : string;

  constructor(url:string){
    const randValue = Math.random()+Math.random()*10000000
    this.id = parseInt(""+randValue,16);
    this.url = url;
  }
}
