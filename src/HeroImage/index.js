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
  className?: string,
  title: string,
  imageUrl: string,
  xPos?: string,
  yPos?: string,
  style?: {},
}

const HeroImage = ({
  className,
  title,
  imageUrl,
  xPos,
  yPos,
  style,
}: Props) => {
  return (
    <HeroImageWrapper
      className={className}
      style={{
        ...style,
      }}
    >
      <Image imageUrl={imageUrl} xPos={xPos} yPos={yPos}>
        {title ? <BottomOverlay /> : null}
        <Title>{title}</Title>
      </Image>
    </HeroImageWrapper>
  )
}

export default HeroImage
