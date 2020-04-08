import { Controller, Post, Body, Headers, Get, Query, Res } from '@nestjs/common';
import { CreateIncidentDTO } from './dtos/createIncident.dto';
import { IncidentsService } from './incidents.service';
import { Response } from 'express';

@Controller('incidents')
export class IncidentsController {
    constructor(
        private readonly incidentsService: IncidentsService
    ) { }

    @Get()
    index(@Query('page') page: number, @Res() response: Response) {
        return this.incidentsService.index(page, response);
    }

    @Post()
    create(
        @Body() createIncidentDto: CreateIncidentDTO,
        @Headers('authorization') ongId: string) {
        return this.incidentsService.create(createIncidentDto, ongId);
    }


}
