import React from 'react'
import { shallow } from 'enzyme'

import LoadingIndicator from '../index'

describe('<LoadingIndicator />', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<LoadingIndicator />)
  })

  it('should render properly', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})
