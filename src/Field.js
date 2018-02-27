// @flow

import styled from 'styled-components'

export const Field = styled.div`
  padding: 0;
  background: transparent;
  border: 0;
  color: #212529;
  outline: none;
  cursor: text;
  display: block;
  width: 100%;
  line-height: 32px;
  padding-bottom: 3px;
  transition: opacity 200ms ease-in-out;
  font-weight: 400;

  &:disabled: {
    cursor: not-allowed;
    color: rgba(119, 119, 119, 0.65);
  }

  ::-webkit-input-placeholder {
    color: #8898aa;
  }
  ::-moz-placeholder {
    color: #8898aa;
  }
  ::-ms-input-placeholder {
    color: #8898aa;
  }

  /* IE doesn't show placeholders when empty+focused */
  :-ms-input-placeholder {
    color: #fff;
  }

  ::placeholder {
    color: #8898aa;
  }

  &.is-empty:not(.is-focused) {
    opacity: 0;
  }

  &.is-focused + span span,
  &:not(.is-empty) + span span {
    transform: scale(0.68) translateY(-36px);
    cursor: default;
  }

  &.is-focused + span span,
  &:not(.is-empty) + span span {
    transform: scale(0.68) translateY(-36px);
    cursor: default;
  }

  &.is-focused + span {
    border-bottom-color: #007bff;
  }
`

export default Field
