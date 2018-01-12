import 'jest-enzyme'
import * as React from 'react';
import Content from './index';
import { shallow } from 'enzyme'

describe('<Content/>: Component', () => {
    const ContentWrapper = shallow(<Content />)
    const children = ContentWrapper.children()

    it('renders without crashing', () => {    
        expect(ContentWrapper).toBeTruthy()
    })

    it('has a Card component as child', () => {
        const card = ContentWrapper.name()
        expect(card).toBe('Card')
    })

    it('has 3 children: [Route, Route, Route]', () => {
        const childrenNames = ['Route', 'Route', 'Route']
        const childrenCount = children.length
        children.forEach((child, index) => {
            const name = child.name()
            expect(name).toBe(childrenNames[index])
        })
        expect(childrenCount).toBe(3)
    })

})
