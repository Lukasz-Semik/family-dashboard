import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateFamilyInvitationUserTables1640547202755 implements MigrationInterface {
    name = 'CreateFamilyInvitationUserTables1640547202755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "invitation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "firstName" character varying(255), "middleName" character varying(255), "lastName" character varying(255), "dob" TIMESTAMP WITH TIME ZONE, "gender" character varying(255) NOT NULL, "familyName" character varying(255) NOT NULL, "modulePermissions" text NOT NULL, "memberType" character varying(255) NOT NULL, "validTo" TIMESTAMP WITH TIME ZONE NOT NULL, "code" character varying(4) NOT NULL, "inviterName" character varying(255) NOT NULL, "familyId" uuid, CONSTRAINT "UQ_bcb0a0d2333443083582a05cdd8" UNIQUE ("email"), CONSTRAINT "PK_beb994737756c0f18a1c1f8669c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "firstName" character varying(255) NOT NULL, "middleName" character varying(255), "lastName" character varying(255) NOT NULL, "dob" TIMESTAMP WITH TIME ZONE NOT NULL, "gender" character varying(255) NOT NULL, "modulePermissions" text array NOT NULL DEFAULT '{}', "memberType" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "familyId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "family" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba386a5a59c3de8593cda4e5626" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "invitation" ADD CONSTRAINT "FK_5189c3146b4f2fd05cfeb48e6ed" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d0e67d3ce8cbe4f407afe228a1b" FOREIGN KEY ("familyId") REFERENCES "family"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d0e67d3ce8cbe4f407afe228a1b"`);
        await queryRunner.query(`ALTER TABLE "invitation" DROP CONSTRAINT "FK_5189c3146b4f2fd05cfeb48e6ed"`);
        await queryRunner.query(`DROP TABLE "family"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "invitation"`);
    }

}
