import api from '@/plugins/axios';

class AuthService {
    async login(usuario) {
        const { data } = await api.post('/token/', usuario)
        return data
    }
}

export default new AuthService()