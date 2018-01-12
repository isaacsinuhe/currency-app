import 'jest-enzyme'
import * as React from 'react'
import Transactions from './index'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

describe('<Transactions/>: Component', () => {

    it('contains a store', () => {
        const wrapper = shallow(
            <Provider 
                store={
                    createStore(combineReducers(
                        { s: (state) => ({})}
                    ))}
            >
                <Transactions/>
            </Provider>
        )
        expect(wrapper).toBeTruthy()
    })

})