import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const mockUser = {
        nome: 'Admin',
        email: 'admin@gmail.com',
        senha: '123456',
    };

    const login = async ({email, senha}) => {
        if(email === '' || senha === '') {
            alert('Digite email e senha');
        } else if (email === mockUser.email && senha === mockUser.senha) {
            const userData = { nome: mockUser.nome, email: mockUser.email };
            setIsAuthenticated(true);
            setUser(userData);
            await AsyncStorage.setItem('@auth_user', JSON.stringify(userData))
        } else {
            alert('Credenciais inválidas');
        }
    }

    const logout = async () => {
        setIsAuthenticated(false);
        setUser(null);
        await AsyncStorage.removeItem('@auth_user');
    }

    const loadUserFromStorage = async () => {
        const storedUser = await AsyncStorage.getItem('@auth_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true)
        }
    };

    useEffect(() => {
        loadUserFromStorage();
    }, [])

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);