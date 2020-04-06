import { Controller, Post, Body } from '@nestjs/common';
import { CreateSessionDTO } from './dtos/createSession.dto';
import { Session } from './sessions.entity';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {

    constructor(private readonly sessionsService: SessionsService) { }

    @Post()
    async create(@Body() createSessionDto: CreateSessionDTO): Promise<Session> {
        return this.sessionsService.create(createSessionDto);
    }
}
