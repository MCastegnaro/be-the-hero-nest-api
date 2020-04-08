import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionsController } from './sessions.controller';
import { Ong } from '../ongs/ong.entity';
import { SessionsService } from './sessions.service';
import { OngsService } from 'src/ongs/ongs.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ong])
  ],
  controllers: [SessionsController],
  providers: [SessionsService, OngsService]
})
export class SessionsModule { }
