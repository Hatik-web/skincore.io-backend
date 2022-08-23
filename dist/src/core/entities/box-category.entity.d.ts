export declare enum TypeBox {
    Free = "Free",
    Paid = "Paid"
}
export declare class BoxCategoryEntity {
    id: number;
    name: string;
    position: number;
    type: TypeBox;
}
