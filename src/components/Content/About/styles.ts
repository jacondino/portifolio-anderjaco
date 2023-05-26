import styled from 'styled-components'

export const About = styled.article`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #0058ff 60%, #61ff87 40%);
  height: 100vh;

  ::before {
    content: '';
    background: linear-gradient(#61ff87 0 0) calc(1 * 100% / 6),
      linear-gradient(#61ff87 0 0) calc(2 * 100% / 6),
      linear-gradient(#61ff87 0 0) calc(3 * 100% / 6),
      linear-gradient(#61ff87 0 0) calc(4 * 100% / 6),
      linear-gradient(#61ff87 0 0) calc(5 * 100% / 6),
      linear-gradient(#61ff87 0 0) calc(6 * 100% / 6);
    background-size: 6px 100%;
    background-repeat: no-repeat;
    width: 4%;
    height: 100vh;
    position: absolute;
    right: 40%;
  }

  h1 {
    font-size: 6em;
    text-shadow: 4px 8px 4px #00000054;
    width: 25vw;
    line-height: 1;
  }

  .aboutIcon {
    position: absolute;

    &.pointLeft {
      left: 0;
    }

    &.pointBottom {
      left: 45%;
      bottom: 0;
    }

    &.circleCenter {
      left: 50%;
      top: 20%;
      opacity: 0.1;
    }

    &.waveLineBottom {
      bottom: -12%;
    }

    &.waveLineRight {
      right: 0;
      bottom: -30%;
      transform: scaleX(-1);
      opacity: 0.2;

      svg path {
        stroke: #0058ff;
      }
    }

    &.waveTopRight {
      right: 5%;
      top: 20%;
      rotate: 30deg;

      svg path {
        stroke: #0058ff;
      }
    }

    &.prideTopRight {
      right: 30%;
      top: 10%;
    }
  }
`

export const Box = styled.div`
  flex-wrap: wrap;
  display: flex;
  padding-top: 3em;
`

export const BoxText = styled.div`
  flex: 1 0 50%;

  p {
    margin: 25px 0 0;
  }
`

export const BoxTextSub = styled.div`
  display: flex;
  padding-top: 3em;

  p {
    font-size: 1.5em;
  }
`

export const Avatar = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1 0 50%;
`
