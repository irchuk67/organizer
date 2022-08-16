import axios from 'axios';

const baseURL = 'http://localhost:8080';
const organizer = axios.create({
        baseURL: baseURL
    }
)

const authorize = async (authBody) => await organizer.post('/auth/', {...authBody});
const registrate = async regBody => await organizer.post('/auth/registration', {...regBody})

export {authorize, registrate}



