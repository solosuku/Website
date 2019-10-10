export class BlogModel{

  public name: string;
  public description: string;
  public price: number;
  public imgpath: string;

  constructor(name: string , price: number, desc: string , path: string ){
    this.name = name;
    this.description = desc;
    this.imgpath = path;
    this.price = price;
  }
}
