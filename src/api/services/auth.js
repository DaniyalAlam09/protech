import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('authToken');
    const [userExist, setUserExist] = useState(token ? true : false);



    return (
        <AuthContext.Provider
            value={{
                userExist,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
