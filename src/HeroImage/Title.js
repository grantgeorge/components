// @flow

import styled from 'styled-components'

const Title = styled.div`
  position: absolute;
  color: #fff;
  font-weight: 800;
  line-height: inherit;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 2.2rem;

  @media (min-width: 768px) {
    line-height: 1;
    font-size: 4em;
    bottom: 15px;
    left: 25px;
    width: inherit;
    text-align: inherit;
  }
`

export default Title
