import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeDobToDateInInvitationTable1637522099285 implements MigrationInterface {
    name = 'ChangeDobToDateInInvitationTable1637522099285'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" DROP COLUMN "dob"`);
        await queryRunner.query(`ALTER TABLE "invitation" ADD "dob" TIMESTAMP WITH TIME ZONE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" DROP COLUMN "dob"`);
        await queryRunner.query(`ALTER TABLE "invitation" ADD "dob" character varying`);
    }

}
