import axios from 'axios';

// Создаём экземпляр axios
const ax = axios.create({
    baseURL: '/api', // Указываем базовый URL
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Добавляем интерцептор для добавления токена в заголовок
ax.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Получаем токен из localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Добавляем токен в заголовок
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default ax;
