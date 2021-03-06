import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionsModule } from './sessions/sessions.module';
import { OngsModule } from './ongs/ongs.module';
import { IncidentsModule } from './incidents/incidents.module';
import { ProfilesModule } from './profiles/profiles.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [
    SessionsModule,
    OngsModule,
    TypeOrmModule.forRoot(ormconfig),
    IncidentsModule,
    ProfilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
