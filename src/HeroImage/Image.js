// @flow

import styled from 'styled-components'

const HeroImage = styled.div`
  background-repeat: no-repeat;
  background-position-x: ${(props) => (props.xPos ? props.xPos : '50%')};
  background-position-y: ${(props) => (props.yPos ? props.yPos : '33%')};
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 170px;
  border: none;
  background-color: transparent;
  background-image: url(${(props) => props.imageUrl});

  @media (min-width: 568px) {
    min-height: 400px;
  }

  @media (min-width: 1400px) {
    padding-top: 25%;
  }
`

export default HeroImage
