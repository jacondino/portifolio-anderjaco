import React, { FC } from 'react'
import * as S from './styles'

interface WaveLineProps {
  className?: string
}

export const WaveLineIcon: FC<WaveLineProps> = ({ className }) => {
  return (
    <S.Icon className={className ? className : ''}>
      <svg
        width="323"
        height="372"
        viewBox="0 0 323 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.54589 149.451C12.2459 142.351 33.5459 125.051 42.4459 115.851C63.8459 93.6512 80.9459 67.6512 102.346 45.4512C123.746 23.2512 150.946 4.35118 181.746 2.25118C206.446 0.451182 231.446 10.2512 249.346 27.3512C267.146 44.5512 277.846 68.6512 279.846 93.3512C282.146 122.751 272.646 153.251 281.846 181.251C286.346 194.951 294.946 206.751 301.746 219.351C321.846 256.351 327.046 301.151 315.746 341.651C313.246 350.551 309.946 359.351 304.646 366.851C304.546 367.051 301.746 370.551 301.546 370.751"
          stroke="white"
          strokeWidth="2.4"
        />
      </svg>
    </S.Icon>
  )
}
