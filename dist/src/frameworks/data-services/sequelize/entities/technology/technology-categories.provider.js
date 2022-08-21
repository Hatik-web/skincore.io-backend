"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.technologyCategoriesProvider = exports.TECHNOLOGY_CATEGORIES_REPOSITORY_TOKEN = void 0;
const technology_category_entity_1 = require("./technology-category.entity");
exports.TECHNOLOGY_CATEGORIES_REPOSITORY_TOKEN = 'TECHNOLOGY_CATEGORIES_REPOSITORY';
exports.technologyCategoriesProvider = {
    provide: exports.TECHNOLOGY_CATEGORIES_REPOSITORY_TOKEN,
    useValue: technology_category_entity_1.TechnologyCategory,
};
//# sourceMappingURL=boxes-categories.provider.js.map