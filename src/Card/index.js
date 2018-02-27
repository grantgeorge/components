// @flow

/**
 *
 * Card
 *
 */

import React from 'react'
import styled from 'styled-components'

export const StyledCard = styled.div`
  background: white;
  box-shadow: 0 7px 14px 0 rgba(49, 49, 93, 0.1),
    0 3px 6px 0 rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 1.25rem;
  transition: height 0.3s ease;

  @media (min-width: 576px) {
    padding: 1.5rem;
  }
`

type Props = {
  children?: React.Node,
  className?: string,
  style?: {},
}

function Card({ children, className, style }: Props) {
  return (
    <StyledCard className={className} style={style}>
      {children}
    </StyledCard>
  )
}

export default Card
