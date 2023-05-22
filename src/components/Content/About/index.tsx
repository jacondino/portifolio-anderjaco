import React from 'react'
import * as S from './styles'
import { Container } from '../../Grid'

export const About = () => {
  return (
    <S.About>
      <Container>
        <div className="about__box">
          <div className="about__box__text">
            <h1>Hi, I&apos;m Anderson Jacondino</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              delectus, esse neque voluptatum praesentium fugit
            </p>
            <div className="about__box__text__sub">
              <p>
                Lorem ipsum dolor sit amet consectetu rconsectetur consectetur
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetu rconsectetur consectetur
              </p>
            </div>
          </div>
          <div className="about__box__figure">teste</div>
        </div>
      </Container>
    </S.About>
  )
}
