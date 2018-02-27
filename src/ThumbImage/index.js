// @flow

/**
 *
 * ThumbImage
 *
 */

import React from 'react'
import styled from 'styled-components'

const ThumbImage = styled.div`
  background-color: #ccc;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2);

  min-width: ${(props) => (props.minWidth ? props.minWidth : 'auto')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : 'auto')};
`

type Props = {
  className: {},
  style: {},
  props: {},
}

const Component = ({ className, style, ...props }: Props) => {
  return <ThumbImage className={className} style={style} {...props} />
}

export default Component
