import { User } from "../../types";
import { authenticate, logout } from "../../utils/auth";
import { AuthActions } from "../actions/authActions";
import produce from "immer";

// Estado inicial basado en la autenticación actual
export const authInitialState: User = authenticate();

export const AuthReducer = produce((state: User, action: AuthActions): User => {
    switch (action.type) {
        case "login":
            // Autenticar usuario con el token proporcionado
            const authenticatedUser = authenticate(action.token);
            return { ...state, ...authenticatedUser };

        case "logout":
            // Cerrar sesión y limpiar el estado
            return { ...state, ...logout() };

        case "updateRole":
            // Actualizar el rol del usuario
            state.role = action.role;
            return state;

        default:
            return state;
    }
});
