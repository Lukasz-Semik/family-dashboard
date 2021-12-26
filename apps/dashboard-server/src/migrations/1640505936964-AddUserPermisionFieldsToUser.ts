import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserPermisionFieldsToUser1640505936964 implements MigrationInterface {
    name = 'AddUserPermisionFieldsToUser1640505936964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isFamilyHead" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "hasFinanceModuleAccess" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "memberType" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "memberType"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hasFinanceModuleAccess"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isFamilyHead"`);
    }

}
