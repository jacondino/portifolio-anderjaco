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

  .about__box {
    flex-wrap: wrap;
    display: flex;
    padding-top: 3em;
  }

  .about__box__text,
  .about__box__figure {
    flex: 1 0 50%;
  }

  .about__box__text {
    p {
      margin: 25px 0 0;
    }
  }

  .about__box__text__sub {
    display: flex;
    padding-top: 3em;

    p {
      font-size: 1.5em;
    }
  }
`
