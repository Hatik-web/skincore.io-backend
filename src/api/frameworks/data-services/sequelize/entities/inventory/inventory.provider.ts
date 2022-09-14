import {Inventory} from './inventory.entity';

export const INVENTORIES_REPOSITORY_TOKEN = 'INVENTORIES_REPOSITORY'

export const inventoryProvider = {
    provide: INVENTORIES_REPOSITORY_TOKEN,
    useValue: Inventory,
  }