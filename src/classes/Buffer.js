import Item from './Item.js';

export default class Buffer {
  constructor(){
    this.list = []
  }
  add = (url) => {
    const exists = this.list.filter(item => item.url === url);
    if(exists.length === 0){
      const item = new Item(url);
      this.list.push(item)
      return(item.id);
    }else{
      return(exists[0].id)
    }
  }
  findByID = (id) => {
    const found = null;
    this.list.forEach((item, i) => {
      if(item.id === id){
        found = i;
      }
    });
    return(found);
  }
  findByUrl = (url) => {
    const found = null;
    this.list.forEach((item, i) => {
      if(item.url === url){
        found = i;
      }
    });
    return(found);
  }
  remove = (itemID) => {
    const found = this.findByID(itemID);
    if(found !== null){
      this.list.splice(found,1);
      return(true);
    }else{
      return(false);
    }
  }
  update = (itemID,url) => {
    const found = this.findByID(itemID);
    if(found !== null){
      this.list.url = url;
      return(true);
    }else{
      return(false);
    }
  }

}
