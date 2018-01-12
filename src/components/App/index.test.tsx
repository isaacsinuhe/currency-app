import 'jest-enzyme'
import * as React from 'react';
import App from './index';
import { shallow } from 'enzyme'

describe ('<App/>: Component', () => {
  const AppWrapper = shallow(<App />)
  const children = AppWrapper.children()
  const grandchildren = children.children()

  it('renders without crashing', () => {
    expect(AppWrapper).toBeTruthy()
  })

  it('has a MuiThemeProvider component as child', () => {
    const themeProvider = AppWrapper.name()
    expect(themeProvider).toBe('MuiThemeProvider')
  })

  it('has only one child, which is a Card component', () => {
    const childrenCount = children.length
    const childrenDisplayName = children.name()
    expect(childrenDisplayName).toBe('Card')
    expect(childrenCount).toBe(1)
  })

  it('has 3 grandchildren: {NavBar, Content, Footer}', () => {
    const grandchildrenCount = grandchildren.length
    const names = ['NavBar', 'Content', 'Footer']

    grandchildren.forEach( (grandChild, index) => {
      const grandChildrenDisplayName = grandChild.name()
      expect(grandChildrenDisplayName).toBe(names[index])
    })
    expect(grandchildrenCount).toBe(3)
  })
  
})
