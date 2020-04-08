import { MigrationInterface, QueryRunner } from "typeorm";

export class Migracoes1586260384715 implements MigrationInterface {
    name = 'migracoes1586260384715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ong" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "whatsapp" varchar NOT NULL, "city" varchar NOT NULL, "uf" varchar NOT NULL)`, undefined);
        await queryRunner.query(`CREATE TABLE "incident" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "value" integer NOT NULL, "ongId" varchar)`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_incident" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "value" integer NOT NULL, "ongId" varchar, CONSTRAINT "FK_543589a01e71433ff8fee694f7e" FOREIGN KEY ("ongId") REFERENCES "ong" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_incident"("id", "title", "description", "value", "ongId") SELECT "id", "title", "description", "value", "ongId" FROM "incident"`, undefined);
        await queryRunner.query(`DROP TABLE "incident"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_incident" RENAME TO "incident"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "incident" RENAME TO "temporary_incident"`, undefined);
        await queryRunner.query(`CREATE TABLE "incident" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "title" varchar NOT NULL, "description" varchar NOT NULL, "value" integer NOT NULL, "ongId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "incident"("id", "title", "description", "value", "ongId") SELECT "id", "title", "description", "value", "ongId" FROM "temporary_incident"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_incident"`, undefined);
        await queryRunner.query(`DROP TABLE "incident"`, undefined);
        await queryRunner.query(`DROP TABLE "ong"`, undefined);
    }

}
