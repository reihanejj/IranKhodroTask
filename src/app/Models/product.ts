export class product   {
    public constructor(
        name: string,
        model: string,
        price: number,
        electric: boolean,
    ) {
        this.name = name;
        this.model = model;
        this.price=price
        this.electric = electric;
    }
    
    public name: string;
    public model: string;
    public price: number;
    public electric: boolean;
}