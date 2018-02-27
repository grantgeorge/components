// @flow

import React, { PureComponent } from 'react'
import classNames from 'classnames'

import Input from './Input'
import Label from './Label'
import Span1 from './Span1'
import Span2 from './Span2'

export type Props = {
  name: string,
  placeholder: string,
  label: string,
  autoFocus?: boolean,
  required?: boolean,
  style?: Object,
  type?: string,
  disabled?: boolean,

  onChange?: () => void,
}

export type State = {
  isFocused: boolean,
  isEmpty: boolean,
}

class BlissInput extends PureComponent<Props, State> {
  static defaultProps = {
    'onChange': () => {},
    'type': 'text',
  }

  constructor(props: ownProps) {
    super(props)
    this.state = {
      'isFocused': false,
      'isEmpty': true,
    }
  }

  onFocus = () => {
    this.setState({
      'isFocused': true,
    })
  }

  onBlur = () => {
    this.setState({
      'isFocused': false,
    })
  }

  onChange = (event: SyntheticInputEvent) => {
    if (event.target.value.length === 0) {
      this.setState({
        'isEmpty': true,
      })
    } else {
      this.setState({
        'isEmpty': false,
      })
    }
    this.props.onChange(event)
  }

  render() {
    return (
      <Label style={this.props.style} htmlFor={this.props.name}>
        <Input
          name={this.props.name}
          className={classNames({
            'is-focused': this.state.isFocused,
            'is-empty': this.state.isEmpty,
          })}
          placeholder={this.props.placeholder}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={this.onChange}
          autoFocus={this.props.autoFocus}
          required={this.props.required}
          type={this.props.type || 'text'}
          disabled={this.props.disabled}
        />
        <Span1>
          <Span2>{this.props.label}</Span2>
        </Span1>
      </Label>
    )
  }
}

export default BlissInput
