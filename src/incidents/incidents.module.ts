import { Module } from '@nestjs/common';
import { IncidentsController } from './incidents.controller';
import { IncidentsService } from './incidents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incident } from './incident.entity';
import { OngsService } from 'src/ongs/ongs.service';
import { Ong } from 'src/ongs/ong.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Incident, Ong])
  ],
  controllers: [IncidentsController],
  providers: [IncidentsService, OngsService]
})
export class IncidentsModule { }
