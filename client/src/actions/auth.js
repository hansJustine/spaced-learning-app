import { userActions } from '../reducers/constantActionTypes';
import { decodeToken, isExpired } from "react-jwt";
import * as api from '../api';

export const login = async (userData) => {
    const { data } = await api.login(userData);
    localStorage.setItem('authToken', data.token);
    return { message: 'Let\'s learn! ' };
}
export const signup = async (userData) => {
    const { data } = await api.signup(userData);
    localStorage.setItem('authToken', data.token);
    return { message: 'Welcome, let\'s learn!' };
} 