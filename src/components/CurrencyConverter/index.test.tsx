import 'jest-enzyme'
import * as React from 'react';
import * as Redux from 'redux'
import CurrencyConverter from './index';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';

describe('<CurrencyConverter/>: Component', () => {

    it('contains a store', () => {
        
        const wrapper = shallow(
            <Provider 
                store={Redux.createStore( Redux.combineReducers({
                    s: (state) => ({})
                }))}
            >
                <CurrencyConverter/>
            </Provider>
        )
        expect(wrapper).toBeTruthy()
    })

})