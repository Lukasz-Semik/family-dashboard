import {MigrationInterface, QueryRunner} from "typeorm";

export class AddInvitationsFamilyRelation1640003978974 implements MigrationInterface {
    name = 'AddInvitationsFamilyRelation1640003978974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" ADD "familyId" uuid`);
        await queryRunner.query(`ALTER TABLE "invitation" ADD CONSTRAINT "FK_5189c3146b4f2fd05cfeb48e6ed" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invitation" DROP CONSTRAINT "FK_5189c3146b4f2fd05cfeb48e6ed"`);
        await queryRunner.query(`ALTER TABLE "invitation" DROP COLUMN "familyId"`);
    }

}
