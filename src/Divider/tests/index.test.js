import React from 'react'
import { shallow } from 'enzyme'

import Divider from '../index'

describe('<Divider />', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<Divider>Child</Divider>)
  })

  it('should render properly', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})
