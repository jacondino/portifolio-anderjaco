import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: white;
`

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 50px;
  align-items: center;
  height: 80px;
  position: relative;
`

export const Nav = styled('nav')<{ open: boolean }>`
  opacity: ${(props) => (props.open ? 1 : 0)};
  background: white;
  width: 30%;
  position: absolute;
  right: 0;
  z-index: -1;
  top: 0;
  padding: 6em;
  text-align: left;
  transition: opacity 0.4s;

  li {
    padding: 14px 0;

    a {
      color: #0058ff;
    }
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  position: absolute;
  right: 10px;
  top: 0;

  .hamburger {
    cursor: pointer;

    div {
      position: relative;
      height: 3px;
      margin-left: auto;
      background-color: #0058ff;
      margin-top: 13px;
      transition: all 0.3s ease-in-out;
    }

    .top-bun {
      width: 70px;
    }

    .meat {
      width: 50px;
    }

    .bottom-bun {
      width: 34px;
    }
  }

  .hamburger__open {
    .top-bun {
      transform: rotate(-45deg);
      margin-top: 25px;
      width: 40px;
    }

    .bottom-bun {
      opacity: 0;
      transform: rotate(45deg);
    }

    .meat {
      transform: rotate(45deg);
      margin-top: -3px;
      width: 40px;
    }

    + .nav {
      top: 0;
      transform: scale(1);
    }
  }
`
