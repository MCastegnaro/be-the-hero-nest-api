import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Incident } from '../incidents/incident.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Incident) private incidentsRepository: Repository<Incident>,
    ) { }

    async getOngProfile(data: string): Promise<Incident[]> {
        const ongId = data;


        const profile = await this.incidentsRepository.find({
            select: ['id', 'ong', 'title', 'description', 'value'],
            relations: ['ong'],
            where: { ong: ongId },
        });

        return profile;
    }
}
