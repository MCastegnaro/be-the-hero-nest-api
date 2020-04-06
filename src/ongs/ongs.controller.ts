import { Controller, Get, Post, Body } from '@nestjs/common';
import { OngsService } from './ongs.service';
import { Ong } from './ong.entity';
import { GenerateID } from '../utils/generateUniqueId';
import { Observable } from 'rxjs';
import { CreateOngDTO } from './dtos/createOng.dto';

@Controller('ongs')
export class OngsController {

    constructor(private readonly ongsService: OngsService) { }

    @Get()
    findAll(): Promise<Ong[]> {
        return this.ongsService.findAll();
    }

    @Post()
    create(@Body() createOngDto: CreateOngDTO): Observable<Promise<Ong>> {
        const uniqueId = GenerateID.generateUniqueId();

        createOngDto.id = uniqueId;

        return this.ongsService.create(createOngDto);
    }

}
