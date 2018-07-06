import React from 'react'
import { shallow } from 'enzyme'

import Card from '../index'

describe('<Card />', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Card />)
  })

  it('should render properly', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})
