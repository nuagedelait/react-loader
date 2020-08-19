

export default class Item {
  constructor(url){
    this.id = parseInt(Math.random()+Math.random(),16);
    this.url = url;
  }
}
