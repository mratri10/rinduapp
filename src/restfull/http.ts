import axios from "axios";

export default axios.create({
    baseURL: 'http://192.168.1.99:2255',
    headers: {
        "Content-type": "application/json",
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    }
})