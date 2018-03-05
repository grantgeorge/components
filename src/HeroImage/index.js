// @flow

/**
 *
 * HeroImage
 *
 */

import React from 'react'

import BottomOverlay from './BottomOverlay'
import Image from './Image'
import HeroImageWrapper from './HeroImageWrapper'
import Title from './Title'

type Props = {
  title: string,
  imageUrl: string,
  style: {},
}

const HeroImage = ({ title, imageUrl, style }: Props) => {
  return (
    <HeroImageWrapper
      style={{
        ...style,
      }}
    >
      <Image imageUrl={imageUrl}>
        {title ? <BottomOverlay /> : null}
        <Title>{title}</Title>
      </Image>
    </HeroImageWrapper>
  )
}

export default HeroImage
