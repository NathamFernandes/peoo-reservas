import { runMigrations } from './runMigrations.js';
import { runSeeders } from './runSeeders.js';

const setupDatabase = async () => {
    console.log('Executando migrations...');
    await runMigrations();

    console.log('Executando seeders...');
    await runSeeders();

    console.log('Banco de dados configurado com sucesso!');
};

setupDatabase();