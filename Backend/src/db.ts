// db.ts
import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

interface Anime {
        nombre: string;
    descripcion: string;
    puntuacion: number;
}


export async function saveAnimeToDatabase(anime: Anime) {
    const query = 'INSERT INTO animes (nombre, descripcion, puntuacion) VALUES ($1, $2, $3)';
    const values = [anime.nombre, anime.descripcion, anime.puntuacion];

    try {
        await pool.query(query, values);
        console.log('Anime guardado en la base de datos:', anime.nombre);
    } catch (error: any) {
        console.error('Error al guardar anime en la base de datos:', error.message);
    }
}