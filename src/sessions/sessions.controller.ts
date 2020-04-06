import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateSessionDTO } from './dtos/createSession.dto';
import { Session } from './sessions';
import { OngsService } from 'src/ongs/ongs.service';
import { Response } from 'express';

@Controller('sessions')
export class SessionsController {

    constructor(private readonly ongsService: OngsService) { }

    @Post()
    async create(@Body() createSessionDto: CreateSessionDTO, @Res() response: Response) {
        const session = new Session();
        session.id = createSessionDto.id;

        const ong = await this.ongsService.findOne(session.id);

        if (!ong) {
            return response.status(HttpStatus.BAD_REQUEST).json({ error: 'No ong found with this id' })
        }
        return response.json(ong);
    }
}
