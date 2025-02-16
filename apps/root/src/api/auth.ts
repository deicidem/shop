import ax from './base.js';

export interface RegisterRequest {
    userName: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

async function register(request: RegisterRequest) {
    return await ax.post('/register', request);
}

async function login(request: LoginRequest) {
    try {
        const res = await ax.post<{ token: string }>('/login', request);
        localStorage.setItem('token', res.data.token);
        return res.data;
    }
    catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}

const AuthService = {
    register,
    login,
};

export default AuthService;
