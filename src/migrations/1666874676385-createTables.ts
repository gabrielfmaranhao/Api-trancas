import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1666874676385 implements MigrationInterface {
    name = 'createTables1666874676385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120), "inst" character varying(120) NOT NULL, CONSTRAINT "UQ_927d8a1800fba0663b86c04c65c" UNIQUE ("inst"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "braids" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "price" integer NOT NULL, "time" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "image_p" character varying NOT NULL, "imagem_s" character varying NOT NULL, "clientId" uuid, CONSTRAINT "PK_41bd15bdf342813b3df7164db6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "braids" ADD CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "braids" DROP CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e"`);
        await queryRunner.query(`DROP TABLE "braids"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
