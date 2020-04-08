import { Injectable } from '@nestjs/common';
import { Incident } from './incident.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIncidentDTO } from './dtos/createIncident.dto';
import { OngsService } from 'src/ongs/ongs.service';
import { Response } from 'express';

@Injectable()
export class IncidentsService {
    constructor(
        @InjectRepository(Incident) private incidentsRepository: Repository<Incident>,
        private readonly ongsService: OngsService
    ) { }

    async index(page = 1, response: Response) {
        const count = await this.incidentsRepository.findAndCount();
        response.set('X-Total-Count', count[1].toString())

        const incident = await this.incidentsRepository.find({
            relations: ['ong'],
            take: 5,
            skip: 5 * (page - 1)
        });

        return response.json(incident);
    }

    async create(createIncidentDTO: CreateIncidentDTO, ongId: string) {
        const incident = new Incident();

        const ong = await this.ongsService.findOneById(ongId);

        incident.title = createIncidentDTO.title;
        incident.description = createIncidentDTO.description;
        incident.value = createIncidentDTO.value;
        incident.ong = ong;

        return await this.incidentsRepository.save(incident);
    }
}
