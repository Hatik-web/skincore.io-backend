"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxDropProvider = exports.BOX_DROP_REPOSITORY_TOKEN = void 0;
const box_drop_entity_1 = require("./box-drop.entity");
exports.BOX_DROP_REPOSITORY_TOKEN = 'BOX_DROP_REPOSITORY';
exports.boxDropProvider = {
    provide: exports.BOX_DROP_REPOSITORY_TOKEN,
    useValue: box_drop_entity_1.BoxDropRelations,
};
//# sourceMappingURL=box-drop.provider.js.map