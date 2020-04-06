import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OngsController } from './ongs.controller';
import { OngsService } from './ongs.service';
import { Ong } from './ong.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ong])
  ],
  controllers: [OngsController],
  providers: [OngsService]
})
export class OngsModule { }
