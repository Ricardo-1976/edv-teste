import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/Replace';
import { SalesProps } from '../interface/sales-interface';

export class Sales {
  private _id: string;
  private props: SalesProps;

  constructor(props: Replace<SalesProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this.id;
  }

  public set customer(customer: string) {
    this.props.customer = customer;
  }

  public get customer(): string {
    return this.props.customer;
  }

  public set product(product: string) {
    this.props.product = product;
  }

  public get product(): string {
    return this.props.product;
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

  public set total(total: number) {
    this.props.total = total;
  }

  public get total(): number {
    return this.props.total;
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
