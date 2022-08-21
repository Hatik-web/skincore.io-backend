"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxProvider = exports.BOXES_REPOSITORY_TOKEN = void 0;
const promocode_entity_1 = require("./promocode.entity");
exports.BOXES_REPOSITORY_TOKEN = 'BOXES_REPOSITORY';
exports.boxProvider = {
    provide: exports.BOXES_REPOSITORY_TOKEN,
    useValue: promocode_entity_1.Box,
};
//# sourceMappingURL=box.provider.js.map