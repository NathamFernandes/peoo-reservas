import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import connection from '../src/config/dbConnect.js';
import dotenv from 'dotenv';

dotenv.config();

const seedersDir = path.join(process.cwd(), 'database\\seeders');

const runSQLFile = (filePath) => {
    return new Promise((resolve, reject) => {
        const command = `mysql -u ${process.env.USER_DB || "root"} -p${process.env.PASSWORD_DB || ""} ${process.env.NAME_DB || "backend_filmes"} < ${filePath}`;

        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erro ao executar o arquivo ${filePath}: ${stderr}`);
                reject(error);
            } else {
                console.log(`Arquivo ${filePath} executado com sucesso: ${stdout}`);
                resolve();
            }
        });
    });
};

export const runSeeders = async () => {
    try {
        const files = fs.readdirSync(seedersDir);
        const sqlFiles = files
            .filter(file => path.extname(file) === '.sql')
            .sort(); // Ordena os arquivos pelo nome (ex: 01_seed_genero.sql, 02_seed_filme.sql, etc.)

        for (const file of sqlFiles) {
            const filePath = path.join(seedersDir, file);
            await runSQLFile(filePath);
        }

        console.log('Todos os seeders foram executados com sucesso.');
    } catch (error) {
        console.error('Erro ao executar os seeders:', error);
    } finally {
        connection.end();
    }
};

runSeeders();