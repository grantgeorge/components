// @flow

import styled from 'styled-components'

const BottomOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 70%,
    rgba(0, 0, 0, 0.6)
  );
`

export default BottomOverlay
