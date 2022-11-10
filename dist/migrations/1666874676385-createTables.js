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
exports.createTables1666874676385 = void 0;
class createTables1666874676385 {
    constructor() {
        this.name = 'createTables1666874676385';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120), "inst" character varying(120) NOT NULL, CONSTRAINT "UQ_927d8a1800fba0663b86c04c65c" UNIQUE ("inst"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "braids" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "price" integer NOT NULL, "time" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "image_p" character varying NOT NULL, "imagem_s" character varying NOT NULL, "clientId" uuid, CONSTRAINT "PK_41bd15bdf342813b3df7164db6d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "braids" ADD CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "braids" DROP CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e"`);
            yield queryRunner.query(`DROP TABLE "braids"`);
            yield queryRunner.query(`DROP TABLE "client"`);
        });
    }
}
exports.createTables1666874676385 = createTables1666874676385;
