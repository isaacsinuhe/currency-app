import 'jest-enzyme'
import * as React from 'react'
import Home from './index'
import { shallow } from 'enzyme'

describe('<Home/>: Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Home />)
        expect(wrapper).toBeTruthy()
    })

})