import 'jest-enzyme'
import * as React from 'react'
import TransactionInput from './index'
import { shallow } from 'enzyme'

describe('<TransactionInput/>: Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(
        <TransactionInput 
            title="title" 
            add={() => { ; }}
        />)
        expect(wrapper).toBeTruthy()
    })

})