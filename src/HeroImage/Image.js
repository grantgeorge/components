// @flow

import styled from 'styled-components'

const HeroImage = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 170px;
  border: none;
  background-color: transparent;
  background-image: url(${(props) => props.imageUrl});

  @media (min-width: 568px) {
    height: 400px;
  }
`

export default HeroImage
