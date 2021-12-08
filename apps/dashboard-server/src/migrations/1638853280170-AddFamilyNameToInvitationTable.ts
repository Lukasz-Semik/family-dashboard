import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFamilyNameToInvitationTable1638853280170 implements MigrationInterface {
    name = 'AddFamilyNameToInvitationTable1638853280170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" ADD "familyName" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" DROP COLUMN "familyName"`);
    }

}
