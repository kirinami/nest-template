import './src/environment';

export default {
    cli: {
        migrationsDir: 'src/migrations',
    },
    entities: [
        'src/modules/**/*.entity.ts',
    ],

    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    database: process.env.DATABASE_USERNAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
};
