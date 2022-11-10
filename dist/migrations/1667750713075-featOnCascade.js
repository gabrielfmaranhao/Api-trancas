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
exports.featOnCascade1667750713075 = void 0;
class featOnCascade1667750713075 {
    constructor() {
        this.name = 'featOnCascade1667750713075';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "braids" DROP CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e"`);
            yield queryRunner.query(`ALTER TABLE "braids" ADD CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "braids" DROP CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e"`);
            yield queryRunner.query(`ALTER TABLE "braids" ADD CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.featOnCascade1667750713075 = featOnCascade1667750713075;
