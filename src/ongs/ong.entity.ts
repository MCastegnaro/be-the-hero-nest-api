import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { IsString, IsNotEmpty } from "class-validator";
import { Incident } from "src/incidents/incident.entity";

@Entity('ong')
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

    @OneToMany(type => Incident, incident => incident.ong, {
        cascade: true
    })
    incidents: Incident[];
}