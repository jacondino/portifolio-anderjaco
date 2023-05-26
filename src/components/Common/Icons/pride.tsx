import React, { FC } from 'react'
import * as S from './styles'

interface PrideIconProps {
  className?: string
}

export const PrideIcon: FC<PrideIconProps> = ({ className }) => {
  return (
    <S.Icon className={className ? className : ''}>
      <svg
        width="48"
        height="86"
        viewBox="0 0 48 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0862 39.1648L3.26578 39.0417L13.7555 21.0551L24.2993 3.1231L34.576 21.1782L44.9067 39.2879L24.0862 39.1648Z"
          fill="#0058FF"
        />
        <path
          d="M24.0862 39.1648L3.26578 39.0417L13.7555 21.0551L24.2993 3.1231L34.576 21.1782L44.9067 39.2879L24.0862 39.1648Z"
          stroke="#0058FF"
          strokeWidth="2.6"
        />
        <path
          d="M23.8204 84.1216L3 83.9985L13.4898 66.0119L24.0335 48.08L34.3102 66.135L44.6409 84.2447L23.8204 84.1216Z"
          stroke="#0058FF"
          strokeWidth="2.6"
        />
      </svg>
    </S.Icon>
  )
}
