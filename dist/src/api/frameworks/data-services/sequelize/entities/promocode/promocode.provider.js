"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promocodeProvider = exports.PROMOCODES_REPOSITORY_TOKEN = void 0;
const promocode_entity_1 = require("./promocode.entity");
exports.PROMOCODES_REPOSITORY_TOKEN = 'PROMOCODES_REPOSITORY';
exports.promocodeProvider = {
    provide: exports.PROMOCODES_REPOSITORY_TOKEN,
    useValue: promocode_entity_1.Promocode,
};
//# sourceMappingURL=promocode.provider.js.map