import { MigrationInterface, QueryRunner } from "typeorm";

export class featOnCascade1667750713075 implements MigrationInterface {
    name = 'featOnCascade1667750713075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "braids" DROP CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e"`);
        await queryRunner.query(`ALTER TABLE "braids" ADD CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "braids" DROP CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e"`);
        await queryRunner.query(`ALTER TABLE "braids" ADD CONSTRAINT "FK_7471dc588c7cd8dd2aa8904146e" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
