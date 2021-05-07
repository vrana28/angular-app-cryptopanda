import construct = Reflect.construct;

export class Cryptocurrency{
      constructor(
        public name: string,
        public id: string,
        public price: number,
        // tslint:disable-next-line:variable-name
        public log_url: string,
        public priceDate: Date,
        public rank: number
      ) {}
}
