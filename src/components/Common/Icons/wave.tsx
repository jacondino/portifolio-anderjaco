import React, { FC } from 'react'
import * as S from './styles'

interface WaveProps {
  className?: string
}

export const WaveIcon: FC<WaveProps> = ({ className }) => {
  return (
    <S.Icon className={className ? className : ''}>
      <svg
        width="175"
        height="44"
        viewBox="0 0 175 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M173.3 18C167.6 17.9 161.9 2.1 156.2 2.1C150.5 2 144.8 17.9 139 17.9C133.3 17.9 127.6 2 121.9 2C116.2 2 110.5 17.9 104.8 17.9C99.0998 17.9 93.3998 2 87.5998 2C81.8998 2 76.1998 17.9 70.4998 17.9C64.7998 17.9 59.0998 2 53.3998 2C47.5998 2 41.8998 17.9 36.1998 17.9C30.4998 17.9 24.7998 2 19.0998 2.1C13.3998 2.1 7.69976 17.9 1.99976 18"
          stroke="white"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M173.3 42.6C167.6 42.6 161.9 26.7 156.2 26.6C150.5 26.6 144.7 42.5 139 42.5C133.3 42.4 127.6 26.6 121.9 26.5C116.2 26.5 110.5 42.4 104.8 42.4C99.0998 42.4 93.3998 26.5 87.5998 26.5C81.8998 26.5 76.1998 42.4 70.4998 42.4C64.7998 42.4 59.0998 26.5 53.2998 26.5C47.5998 26.6 41.9998 42.4 36.1998 42.5C30.4998 42.5 24.7998 26.6 19.0998 26.6C13.2998 26.7 7.69976 42.6 1.99976 42.6"
          stroke="white"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </S.Icon>
  )
}
