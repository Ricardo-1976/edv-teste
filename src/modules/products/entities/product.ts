import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';

export interface ProductProps {
  name: string;
  descrption?: string;
  type?: string;
  barcode?: number;
  price?: number;
  quantities?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export class Product {
  private _id: string;
  private props: ProductProps;

  constructor(props: Replace<ProductProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this.id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set descrption(descrption: string) {
    this.props.descrption = descrption;
  }

  public get descrption(): string {
    return this.props.descrption;
  }

  public set type(type: string) {
    this.props.type = type;
  }

  public get type(): string {
    return this.props.type;
  }

  public set barcode(barcode: number) {
    this.props.barcode = barcode;
  }

  public get barcode(): number {
    return this.props.barcode;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public get price(): number {
    return this.props.price;
  }

  public set quantities(quantities: number) {
    this.props.quantities = quantities;
  }

  public get quantities(): number {
    return this.props.quantities;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set deletedAt(deletedAt: Date) {
    this.props.deletedAt = deletedAt;
  }

  public get deletedAt(): Date {
    return this.props.deletedAt;
  }
}
