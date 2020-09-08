import { authReducer } from "../../auth/authReducer";
import { heroes } from "../../data/heroes";
import '@testing-library/jest-dom';
import { types } from "../../types/types";



describe('Pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer(heroes, {});
        expect(state).toEqual(heroes);
    });

    test('debe de autenticar y colocar el name del usuario', () => {
        
        const user = {
            name: 'Kevin'
        }

        const action = {
            payload: user,
            type: types.login
        }

        const state = authReducer(user, action);
        expect(state).toEqual({name: 'Kevin', logged: true});

    });

    test('debe de borrar el name del usuario y logged en false', () => {
        
        const user = {
            name: 'Kevin'
        }

        const action = {
            type: types.logout
        }

        const state = authReducer(user, action);

        expect(state).toEqual({logged: false});


    });
    
    
    

});