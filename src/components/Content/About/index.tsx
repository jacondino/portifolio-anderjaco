import React, { FC } from 'react'
import * as S from './styles'
import { Container } from '../../Grid'
import {
  WaveIcon,
  Avatar,
  PointIcon,
  CircleIcon,
  WaveLineIcon,
  PrideIcon
} from '../../../components/Common'

export const About: FC = () => {
  return (
    <S.About>
      <CircleIcon className="aboutIcon circleCenter" />
      <PointIcon className="aboutIcon pointLeft" />
      <Container>
        <S.Box>
          <S.BoxText>
            <WaveIcon />
            <h1>Hi, I&apos;m Anderson Jacondino</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              delectus, esse neque voluptatum praesentium fugit
            </p>
            <S.BoxTextSub>
              <p>
                Lorem ipsum dolor sit amet consectetu rconsectetur consectetur
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetu rconsectetur consectetur
              </p>
            </S.BoxTextSub>
          </S.BoxText>
          <S.Avatar>
            <Avatar />
          </S.Avatar>
        </S.Box>
      </Container>
      <PointIcon className="aboutIcon pointBottom" />
      <WaveLineIcon className="aboutIcon waveLineBottom" />
      <WaveLineIcon className="aboutIcon waveLineRight" />
      <WaveIcon className="aboutIcon waveTopRight" />
      <PrideIcon className="aboutIcon prideTopRight" />
    </S.About>
  )
}
