export enum TypeBox {
  Free="Free",
  Paid="Paid"
}

export class BoxCategoryEntity {
  id: number;
  name: string;
  position: number;
  type: TypeBox;
}