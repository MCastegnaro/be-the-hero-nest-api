import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, of } from 'rxjs';

import { Ong } from './ong.entity';
import { CreateOngDTO } from './dtos/createOng.dto';

@Injectable()
export class OngsService {

    constructor(
        @InjectRepository(Ong) private ongsRepository: Repository<Ong>,
    ) { }

    async findOne(id: string) {
        return await this.ongsRepository.findOne(id);
    }

    async findAll(): Promise<Ong[]> {
        return await this.ongsRepository.find();
    }

    create(createOngDto: CreateOngDTO): Observable<Promise<Ong>> {
        const ong = new Ong();

        ong.id = createOngDto.id;
        ong.name = createOngDto.name;
        ong.email = createOngDto.email;
        ong.city = createOngDto.city;
        ong.uf = createOngDto.uf;
        ong.whatsapp = createOngDto.whatsapp;

        return of(this.ongsRepository.save(createOngDto));
    }

}
