import styled from "styled-components";
import { device } from "../../components/Response";

export const Container = styled.header`
  width: 100%;
  padding: 0 6%;
  background: #f5f5f5;
  min-height: 100vh;
  height: 100%;
  position: relative;
  .heroWrapper {
    display: grid;
    grid-template-columns: 57% 43%;
    padding-top: 30px;
    gap: 1rem;
    .left {
      z-index: 999;
      .bgCircle {
        position: absolute;
        width: 214px;
        height: 214px;
        left: 373px;
        top: 280px;
        border-radius: 100%;
        background: rgba(245, 218, 255, 0.6);
        z-index: -1;
      }
      span {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 289.3%;
        padding-left: 100px;
        color: #ff8d3b;
      }
      h1 {
        font-style: normal;
        font-weight: 600;
        font-size: 65px;
        line-height: 100.6%;
        z-index: 99;
      }
      p {
        width: 463px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
      }
      .videoBtn {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 20px;
        span {
          padding: 0;
          font-style: normal;
          font-weight: 600;
          font-size: 16.6257px;
          line-height: 25px;
          color: #000000;
        }
      }
      .appBtn {
        display: flex;
        justify-content: space-between;

        div {
          margin-top: 50px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding-bottom: 121px;
          a {
            cursor: pointer;
          }
        }
        svg {
          margin-top: 19px;
        }
      }
    }
    .right {
      margin-top: 90px;
      width: 100%;
      .circleMain {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;

        border-radius: 100%;
        background: #bcefed;
        z-index: -1;
      }
      .circle-1 {
        position: absolute;
        width: 21px;
        height: 21px;
        left: 790px;
        top: 200px;
        border-radius: 100%;
        background: #a0ddff;
      }
      .circle-2 {
        position: absolute;
        width: 9px;
        height: 9px;
        left: 766px;
        top: 240px;
        background: #fd661f;
        border-radius: 100%;
      }
      .circle-3 {
        position: absolute;
        width: 21px;
        height: 21px;
        right: 135px;
        top: 520px;
        background: #1664fa;
        border-radius: 100%;
      }
    }
  }
  @media ${device.laptop} {
    padding: 0 5%;
    background: none;
    .heroWrapper {
      grid-template-columns: repeat(1, 1fr);
      .right {
        display: grid;
        place-items: center;
      }
      .circle-1,
      .circle-2,
      .circle-3 {
        display: none;
      }
      .userIcon {
        display: none;
      }

      .left {
        z-index: 999;
        .bgCircle {
          position: absolute;
          width: 200px;
          height: 200px;
          left: 373px;
          top: 280px;
          border-radius: 100%;
          background: rgba(245, 218, 255, 0.6);
          z-index: -1;
        }
        span {
          font-size: 18px;
          line-height: 270%;
          padding-left: 50px;
          color: #ff8d3b;
        }
        h1 {
          font-style: normal;
          font-weight: 600;
          font-size: 55px;
          line-height: 100.6%;
          z-index: 99;
        }
        p {
          width: 463px;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
          color: #000000;
          margin: 20px 0;
        }
        .videoBtn {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          span {
            padding: 0;
            font-style: normal;
            font-weight: 600;
            font-size: 16.6257px;
            line-height: 25px;
            color: #000000;
          }
        }
        .appBtn {
          display: flex;
          justify-content: space-between;

          div {
            margin-top: 50px;
            display: flex;
            align-items: center;
            gap: 11px;
            padding-bottom: 121px;
            a {
              cursor: pointer;
            }
          }
          svg {
            margin-top: 19px;
          }
        }
      }
    }
  }
  @media ${device.tablet} {
    padding: 0 4%;
    background: none;
    .heroWrapper {
      .left {
        z-index: 999;
        min-width: 100%;
        .bgCircle {
          width: 117px;
          height: 117px;
          left: 244px;
          top: 238px;
        }
        span {
          font-size: 18px;
        }
        h1 {
          font-size: 45px;
          line-height: 100.6%;
        }
        p {
          width: 100%;
          font-size: 15px;
        }
        .videoBtn {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          span {
            padding: 0;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 25px;
            color: #000000;
          }
        }
        .appBtn {
          display: flex;
          justify-content: space-between;

          div {
            margin-top: 50px;
            display: flex;
            align-items: center;
            gap: 11px;
            padding-bottom: 100px;
            a {
              cursor: pointer;
            }
          }
          svg {
            margin-top: 19px;
          }
        }
      }
      .right {
        margin-top: 90px;
        width: 100%;
        .circleMain {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 400px;
          height: 400px;
          border-radius: 100%;
          background: #bcefed;
          z-index: -1;
        }
      }
    }
  }
  @media ${device.mobileLg} {
    padding: 0 15px;
    h1 {
      font-size: 40px;
      line-height: 100.6%;
    }
    .heroWrapper {
      .right {
        margin-top: 90px;
        width: 100%;
        .circleMain {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 330px;
          height: 330px;
          border-radius: 100%;
          background: #bcefed;
          z-index: -1;
        }
      }
    }
  }
  @media ${device.mobileL} {
    .right {
      padding: 10px;
      .circleMain {
        width: 180px;
        height: 180px;
      }
    }
  }
`;
