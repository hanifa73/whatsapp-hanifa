import axios from 'axios';


const instance =axios.create({
    baseURL:"https://whatsapp-backend-me.herokuapp.com",
});

export default instance;

// ||http://localhost:9000