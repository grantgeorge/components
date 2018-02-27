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
}

const HeroImage = ({ title, imageUrl }: Props) => {
  return (
    <HeroImageWrapper>
      <Image imageUrl={imageUrl}>
        <BottomOverlay />
        <Title>{title}</Title>
      </Image>
    </HeroImageWrapper>
  )
}

export default HeroImage
