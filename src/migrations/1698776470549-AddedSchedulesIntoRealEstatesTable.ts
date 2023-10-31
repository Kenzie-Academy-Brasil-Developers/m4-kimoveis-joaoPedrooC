import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedSchedulesIntoRealEstatesTable1698776470549 implements MigrationInterface {
    name = 'AddedSchedulesIntoRealEstatesTable1698776470549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
