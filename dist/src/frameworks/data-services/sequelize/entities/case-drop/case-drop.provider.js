"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseDropProvider = exports.DROPS_REPOSITORY_TOKEN = void 0;
const case_drop_entity_1 = require("./case-drop.entity");
exports.DROPS_REPOSITORY_TOKEN = 'DROPS_REPOSITORY';
exports.caseDropProvider = {
    provide: exports.DROPS_REPOSITORY_TOKEN,
    useValue: case_drop_entity_1.Drop,
};
//# sourceMappingURL=case-drop.provider.js.map