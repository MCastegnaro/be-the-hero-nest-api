
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './sessions.entity';
import { Repository } from 'typeorm';
import { CreateSessionDTO } from './dtos/createSession.dto';

@Injectable()
export class SessionsService {
    constructor(
        @InjectRepository(Session) private sessionsRepository: Repository<Session>,
    ) { }

    async create(createSessionDto: CreateSessionDTO): Promise<Session> {
        const session = new Session();
        session.id = createSessionDto.id;

        return await this.sessionsRepository.save(session);
    }
}
