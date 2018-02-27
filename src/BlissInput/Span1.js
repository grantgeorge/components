// @flow

import styled from 'styled-components'

import Input from './Input'

// border-bottom-color: #007bff;

export const Span1 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 32px;
  color: #8798ab;
  border-bottom: 1px solid #586a82;
  transition: border-bottom-color 200ms ease-in-out;
  cursor: text;
  pointer-events: none;

  ${Input}.is-focused {
    border-bottom-color: red;
  }
`

export default Span1
