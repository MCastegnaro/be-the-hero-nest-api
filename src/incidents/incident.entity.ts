import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Ong } from "src/ongs/ong.entity";

@Entity('incident')
export class Incident {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    value: number;

    @ManyToOne(type => Ong, ong => ong.incidents)
    ong: Ong;
}