// api.ts
import axios from 'axios';

const apiUrl = 'https://api.jikan.moe/v4/';

export async function getAnimeData() {
    try {
        const response = await axios.get(apiUrl);
        const animeData = response.data;
        return animeData;
    } catch (error: any) {
        console.error('Error al obtener datos de la API:', typeof error === 'object' ? error.message : error);
        return null;
    }
}
