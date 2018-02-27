// @flow

import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  Button,
  Card,
  Divider,
  HeroImage,
  LoadingIndicator,
  ThumbImage,
} from '../src/index'

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
    imageUrl="https://sts-app-assets.s3.amazonaws.com/flume-header-wide.jpeg"
  />
))

storiesOf('Card', module).add('Simple card example', () => (
  <Card>
    <p>Hey there!</p>
  </Card>
))

storiesOf('Divider', module).add('Simple example', () => <Divider>Or</Divider>)

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
