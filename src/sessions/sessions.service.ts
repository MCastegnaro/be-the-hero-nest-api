import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ong } from '../ongs/ong.entity';
import { CreateSessionDTO } from './dtos/createSession.dto';
import { Session } from './sessions';

@Injectable()
export class SessionsService {

    constructor(
        @InjectRepository(Ong) private ongsRepository: Repository<Ong>,
    ) { }

    async login(createSessionDto: CreateSessionDTO): Promise<Ong> {
        const session = new Session();
        session.id = createSessionDto.id;

        const ong = await this.ongsRepository.findOne({ where: { id: session.id } });

        if (!ong) {
            throw new HttpException(
                'No ong found with this id',
                HttpStatus.BAD_REQUEST
            )
        }
        return ong;
    }
}
