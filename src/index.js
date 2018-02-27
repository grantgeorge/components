// @flow

import React from 'react'

import styled from 'styled-components'

import HeroImage from './HeroImage'

const StyledButton = styled.button`
  background-color: ${(props) => (props.urgent ? 'red' : '#007dff')};
  color: white;
  padding: 4px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
`

type Props = {
  title: string,
  onClick: () => void,
  urgent: boolean,
}

const Button = ({ title, onClick, urgent }: Props) => (
  <StyledButton className="Button" onClick={onClick} urgent={urgent}>
    {title}
  </StyledButton>
)

export { Button, HeroImage }
