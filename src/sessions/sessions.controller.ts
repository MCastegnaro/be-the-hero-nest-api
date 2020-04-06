import { Controller, Post, Body } from '@nestjs/common';
import { CreateSessionDTO } from './dtos/createSession.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {

    constructor(
        private readonly sessionsService: SessionsService
    ) { }

    @Post()
    login(@Body() createSessionDto: CreateSessionDTO) {
        return this.sessionsService.login(createSessionDto);
    }
}
