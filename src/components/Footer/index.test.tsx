import 'jest-enzyme'
import * as React from 'react'
import Footer from './index'
import { shallow } from 'enzyme'

describe('<Footer/>: Component', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper).toBeTruthy()
    })

})