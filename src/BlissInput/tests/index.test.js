import React from 'react'
import { shallow } from 'enzyme'

import BlissInput from '../index'

describe('<BlissInput/>', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<BlissInput />)
  })

  it('should render properly', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})
