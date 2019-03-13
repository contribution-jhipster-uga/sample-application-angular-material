export interface IProduct {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    availability?: boolean;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public price?: number,
        public availability?: boolean
    ) {
        this.availability = this.availability || false;
    }
}
