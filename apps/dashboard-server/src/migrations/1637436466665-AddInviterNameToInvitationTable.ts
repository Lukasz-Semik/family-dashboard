import {MigrationInterface, QueryRunner} from "typeorm";

export class AddInviterNameToInvitationTable1637436466665 implements MigrationInterface {
    name = 'AddInviterNameToInvitationTable1637436466665'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" ADD "inviterName" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" DROP COLUMN "inviterName"`);
    }

}
