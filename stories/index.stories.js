// @flow

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  BlissInput,
  Button,
  Card,
  Divider,
  HeroImage,
  LoadingIndicator,
  ThumbImage,
} from '../src/index'

storiesOf('BlissInput', module)
  .add('simple input', () => (
    <BlissInput
      label="Name"
      name="simple-input"
      onChange={action(`changed input`)}
      placeholder="Leeroy Jenkins"
      type="text"
    />
  ))
  .add('with all the props', () => (
    <BlissInput
      label="Email"
      name="email-input"
      onChange={action(`changed input`)}
      placeholder="leeroy@pals4life.com"
      type="email"
      requried
      autoFocus
    />
  ))
  .add('disabled', () => (
    <BlissInput
      label="Cant do it"
      name="disabled-input"
      placeholder="cant see me"
      type="text"
      disabled
    />
  ))

storiesOf('Button', module)
  .add('simple text', () => (
    <Button title="Hello Button" onClick={action('clicked Hello Button')} />
  ))
  .add('with some emoji', () => (
    <Button title="😀 😎 👍 💯" onClick={action('clicked Emojis')} />
  ))
  .add('when urgent', () => (
    <Button title="Cancel" onClick={action('Cancel clicked')} urgent />
  ))

storiesOf('HeroImage', module).add('Simple hero image', () => (
  <HeroImage
    title="flume"
    imageUrl="https://sts-app-assets.s3.amazonaws.com/5c000b15768bd1ce9d6f8f8d36ad851d"
    xPos="50%"
    yPos="0%"
  />
))

storiesOf('Card', module).add('Simple card example', () => (
  <Card>
    <p>Hey there!</p>
  </Card>
))

storiesOf('Divider', module).add('Simple example', () => <Divider>Or</Divider>)

storiesOf('Divider', module).add('No Children', () => <Divider />)

storiesOf('LoadingIndicator', module).add('simple example', () => (
  <LoadingIndicator />
))

storiesOf('ThumbImage', module).add('Album cover example', () => (
  <ThumbImage
    imageUrl="https://i.scdn.co/image/9dcbd30dbe0c621cbaeae427cf80eff9877b4fcd"
    width="150px"
    height="150px"
    minWidth="150px"
    minHeight="150px"
  />
))
