import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID MjfvjR_i4ZJgITMKB4JaS-_h2kYbBVt-h4kgQBOifPU'
    }
})