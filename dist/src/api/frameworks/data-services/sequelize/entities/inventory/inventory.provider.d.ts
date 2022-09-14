import { Inventory } from './inventory.entity';
export declare const INVENTORIES_REPOSITORY_TOKEN = "INVENTORIES_REPOSITORY";
export declare const inventoryProvider: {
    provide: string;
    useValue: typeof Inventory;
};
