import React, { useState } from 'react'
import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '../Grid'
import icon from '../../../public/images/icon.svg'

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <S.Header>
      <Container>
        <S.NavBox>
          <div>
            <Image src={icon} alt="user profile picture" />
          </div>
          <S.Button onClick={() => setOpen(!open)}>
            <label className={`hamburger ${open && 'hamburger__open'}`}>
              <div className="top-bun"></div>
              <div className="meat"></div>
              <div className="bottom-bun"></div>
            </label>
          </S.Button>

          <S.Nav open={open}>
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Skills</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contacts</Link>
              </li>
            </ul>
          </S.Nav>
        </S.NavBox>
      </Container>
    </S.Header>
  )
}
