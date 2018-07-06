import React from 'react'
import { shallow } from 'enzyme'

import HeroImage from '../index'

describe('<HeroImage />', () => {
  let renderedComponent

  beforeEach(() => {
    renderedComponent = shallow(<HeroImage />)
  })

  it('should render properly', () => {
    expect(renderedComponent).toMatchSnapshot()
  })
})
