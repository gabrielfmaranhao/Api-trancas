"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRequisitions1667057358566 = void 0;
class testRequisitions1667057358566 {
    constructor() {
        this.name = 'testRequisitions1667057358566';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "type" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "price" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "time" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "date" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "image_p" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "imagem_s" DROP NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "imagem_s" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "image_p" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "date" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "time" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "price" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "type" SET NOT NULL`);
        });
    }
}
exports.testRequisitions1667057358566 = testRequisitions1667057358566;
