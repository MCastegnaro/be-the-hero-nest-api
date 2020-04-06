import { PrimaryGeneratedColumn, Entity } from "typeorm";
import { IsString } from "class-validator";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    @IsString()
    id: string;
}