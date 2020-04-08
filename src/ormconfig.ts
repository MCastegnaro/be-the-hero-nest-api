import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,

    migrationsRun: false,
    logging: true,
    logger: 'file',

    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
}

export = config;