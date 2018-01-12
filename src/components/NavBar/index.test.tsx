import 'jest-enzyme'
import * as React from 'react'
import NavBar from './index'
import { shallow } from 'enzyme'

describe('<NavBar/>: Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<NavBar />)
        expect(wrapper).toBeTruthy()
    })

})