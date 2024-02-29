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
