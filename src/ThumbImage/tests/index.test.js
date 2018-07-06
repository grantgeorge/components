import React from 'react'
import { shallow } from 'enzyme'

import ThumbImage from '../index'

describe('<ThumbImage />', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<ThumbImage />)
  })

  it('should render properly', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})
