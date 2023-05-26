import React, { FC } from 'react'
import * as S from './styles'

interface CircleIconProps {
  className?: string
}

export const CircleIcon: FC<CircleIconProps> = ({ className }) => {
  return (
    <S.Icon className={className ? className : ''}>
      <svg
        width="235"
        height="235"
        viewBox="0 0 235 235"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M117.3 234.7C52.6 234.7 0 182.1 0 117.4C0 52.6 52.6 0 117.3 0C182.1 0 234.7 52.6 234.7 117.4C234.7 182.1 182.1 234.7 117.3 234.7ZM117.3 21.7C64.6 21.7 21.7 64.6 21.7 117.4C21.7 170.1 64.6 213 117.3 213C170.1 213 213 170.1 213 117.4C213 64.6 170.1 21.7 117.3 21.7Z"
          fill="white"
        />
      </svg>
    </S.Icon>
  )
}
