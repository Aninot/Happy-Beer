export class Beer {
    public name:string;
    public price:number;
    public resume:string;
    public degree:number;
    contructor(name,price,degree,resume){
        this.name=name;
        this.price=price;
        this.resume=resume;
        this.degree=degree;
    }
}