import { Entity, Column, PrimaryColumn } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";

@Entity()
export class Ong {

    @PrimaryColumn()
    id: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    email: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    whatsapp: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    city: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    uf: string;
}