"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropProvider = exports.DROPS_REPOSITORY_TOKEN = void 0;
const drop_entity_1 = require("./drop.entity");
exports.DROPS_REPOSITORY_TOKEN = 'DROPS_REPOSITORY';
exports.dropProvider = {
    provide: exports.DROPS_REPOSITORY_TOKEN,
    useValue: drop_entity_1.Drop,
};
//# sourceMappingURL=drop.provider.js.map