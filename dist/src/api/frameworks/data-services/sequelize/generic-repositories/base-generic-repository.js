"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGenericRepository = void 0;
class BaseGenericRepository {
    constructor(repository) {
        this._repository = repository;
    }
    getAll(options) {
        return this._repository.findAll(options);
    }
    getAllAndCount(options) {
        return this._repository.findAndCountAll(options);
    }
    get(id) {
        const options = { where: { id } };
        return this._repository.findOne(options);
    }
    create(item) {
        return this._repository.create(item);
    }
    update(id, item) {
        return this._repository.update(id, item);
    }
    upsert(data, options) {
        return this._repository.upsert(data, options);
    }
}
exports.BaseGenericRepository = BaseGenericRepository;
//# sourceMappingURL=base-generic-repository.js.map