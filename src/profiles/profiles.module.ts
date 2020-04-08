import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { IncidentsService } from 'src/incidents/incidents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incident } from '../incidents/incident.entity';
import { OngsService } from 'src/ongs/ongs.service';
import { Ong } from '../ongs/ong.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Incident, Ong])
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService, IncidentsService, OngsService]
})
export class ProfilesModule { }
