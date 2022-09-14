"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxesCategoriesProvider = exports.BOXES_CATEGORIES_REPOSITORY_TOKEN = void 0;
const box_category_entity_1 = require("./box-category.entity");
exports.BOXES_CATEGORIES_REPOSITORY_TOKEN = 'BOXES_CATEGORIES_REPOSITORY';
exports.boxesCategoriesProvider = {
    provide: exports.BOXES_CATEGORIES_REPOSITORY_TOKEN,
    useValue: box_category_entity_1.BoxesCategory,
};
//# sourceMappingURL=boxes-categories.provider.js.map