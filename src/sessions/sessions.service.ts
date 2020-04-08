import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ong } from '../ongs/ong.entity';
import { CreateSessionDTO } from './dtos/createSession.dto';
import { Session } from './sessions';
import { OngsService } from 'src/ongs/ongs.service';

@Injectable()
export class SessionsService {

    constructor(
        @InjectRepository(Ong) private ongsRepository: Repository<Ong>,
        private readonly ongsService: OngsService
    ) { }

    async login(createSessionDto: CreateSessionDTO): Promise<Ong> {
        const session = new Session();
        session.id = createSessionDto.id;

        const ong = await this.ongsService.findOneById(session.id);

        return ong;
    }
}
