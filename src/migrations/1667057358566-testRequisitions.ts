import { MigrationInterface, QueryRunner } from "typeorm";

export class testRequisitions1667057358566 implements MigrationInterface {
    name = 'testRequisitions1667057358566'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "time" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "image_p" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "imagem_s" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "imagem_s" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "image_p" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "time" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "price" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "braids" ALTER COLUMN "type" SET NOT NULL`);
    }

}
