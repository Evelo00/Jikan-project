import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

pool.connect((err) => {
      if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
    }
});

// Resto de configuracion y rutas del servidor

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});