import Item from './Item';


export default class Buffer{

  list : Array<Item>;

  constructor(){
    this.list = []
  }

  get size() : number {
    return(this.list.length);
  }

  add = (url:string) : number => {
    const exists = this.list.filter(item => item.url === url);
    if(exists.length === 0){
      const item = new Item(url);
      this.list.push(item)
      return(item.id);
    }else{
      return(exists[0].id)
    }
  }

  findByID = (id : number | string) : Object | null => {
    let found = null;
    this.list.forEach((item, i) => {
      if(id === item.id || id === ""+item.id){
        found = this.list[i];
      }
    });
    return(found);
  }

  findByUrl = (url : string) : Object | null => {
    let found = null;
    this.list.forEach((item, i) => {
      if(item.url === url){
        found = this.list[i];
      }
    });
    return(found);
  }

  remove = (itemID : number | string) : Boolean => {

    let found = null;

    this.list.filter((item,k) => {
      if(item.id === itemID || itemID === item.id+""){
        found = k;
        return(true);
      }else{
        return(false);
      }
    })

    if(found !== null){
      this.list.splice(found,1);
      return(true);
    }else{
      return(false);
    }
  }

  update = (itemID: number | string,url:string) : Boolean => {

    let found = null;

    this.list.filter((item,k) => {
      if(item.id === itemID || itemID === item.id+""){
        found = k;
        return(true);
      }else{
        return(false);
      }
    })


    if(found !== null){
      this.list[found].url = url;
      return(true);
    }else{
      return(false);
    }
  }

}
