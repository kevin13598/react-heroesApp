import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';


describe('Pruebas en <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    };

    const context = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Kevin'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={context}>
                <LoginScreen history={history}/>
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de realizar el dispatch y la navegación', () => {

        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect(context.dispatch).toHaveBeenCalledTimes(1);
        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');


    });
    
    

});