import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const mockUser = {
        nome: 'Admin',
        email: 'admin@gmail.com',
        senha: '123456',
    };

    const login = ({email, senha}) => {
        if(email === '' || senha === '') {
            alert('Digite email e senha');
        } else if (email === mockUser.email && senha === mockUser.senha) {
            setIsAuthenticated(true);
            setUser(true);
        } else {
            alert('Credenciais inválidas');
        }
    }

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);