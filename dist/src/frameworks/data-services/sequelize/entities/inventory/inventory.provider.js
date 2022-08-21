"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventoryProvider = exports.INVENTORIES_REPOSITORY_TOKEN = void 0;
const inventory_entity_1 = require("./inventory.entity");
exports.INVENTORIES_REPOSITORY_TOKEN = 'INVENTORIES_REPOSITORY';
exports.inventoryProvider = {
    provide: exports.INVENTORIES_REPOSITORY_TOKEN,
    useValue: inventory_entity_1.Inventory,
};
//# sourceMappingURL=inventory.provider.js.map