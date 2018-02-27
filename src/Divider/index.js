// @flow

/**
 *
 * Divider
 *
 */

import * as React from 'react'
import styled from 'styled-components'

export const StyledDivider = styled.div`
  border-top: 1px solid #d9dadc;
  display: block;
  line-height: 1px;
  margin: 1.5rem 0;
  position: relative;
  text-align: center;
`

export const DividerTitle = styled.strong`
  background: #ffffff;
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 0 20px;
  text-transform: uppercase;
`

type Props = {
  children?: React.Node,
  className?: string,
  style?: {},
}

const Divider = ({ children, className, style }: Props) => {
  return (
    <StyledDivider className={className} style={style}>
      <DividerTitle>{children}</DividerTitle>
    </StyledDivider>
  )
}

export default Divider
