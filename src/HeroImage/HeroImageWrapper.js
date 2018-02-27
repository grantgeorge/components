// @flow

import styled from 'styled-components'

const HeroImageWrapper = styled.div`
  margin: 0 -15px 1rem;
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16),
    0 3px 6px 1px rgba(0, 0, 0, 0.23);

  @media (min-width: 768px) {
    margin: 0;
  }
`

export default HeroImageWrapper
