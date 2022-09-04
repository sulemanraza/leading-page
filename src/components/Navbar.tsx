import Link from "next/link";
import styled from "styled-components";
import LogoIcon from "../asset/Logo";
import { Flex } from "../styles";
import { device } from "./Response";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <div className="logo">
        <LogoIcon />
      </div>
      <div className="menu">
        <ul className={isOpen ? "active" : ""}>
          <li className="active">
            <Link href="/">
              <a> Home</a>
            </Link>
          </li>
          <li>
            <Link href="/stroy">
              <a>Our Stroy </a>
            </Link>
          </li>
          <li>
            <Link href="/download">
              <a>Download App</a>
            </Link>
          </li>
        </ul>

        <button className="trailBtn">Trail for 7 days</button>
        <div
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          className="menuBtn"
        >
          <p style={{ background: isOpen ? "white" : "black" }}></p>
          <p style={{ background: isOpen ? "white" : "black" }}></p>
          <p style={{ background: isOpen ? "white" : "black" }}></p>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

const Container = styled.nav`
  z-index: 9999;
  display: flex;
  align-items: center;

  min-height: 100px;
  width: inherit;
  .logo {
    cursor: pointer;
    margin-right: 356px;
  }
  .menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      list-style: none;
      li {
        position: relative;
        color: black;
        height: 100%;
        a {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 161.6%;
          text-decoration: none;
          color: inherit;
          display: inline-block;
        }

        &::after {
          content: "";
          position: absolute;
          top: -36px;
          left: 0;
          background: #1664fa;
          width: 0%;
          height: 5px;
          transition: width 0.3s ease-in;
        }
        &:hover {
          &::after {
            background: #1664fa;
            width: 100%;
          }
        }
      }
      li.active {
        &::after {
          width: 100%;
        }
      }
    }
    .trailBtn {
      display: inline-block;
      width: 191px;
      height: 53px;
      background: #1a2024;
      border-radius: 31px;
      color: white;
      font-weight: 500;
      font-size: 16.875px;
      line-height: 161.6%;
      cursor: pointer;
    }
  }
  .menuBtn {
    margin-left: 23px;
    cursor: pointer;
    display: none;
    z-index: 9999;
    p {
      width: 23px;
      height: 2px;
      margin-bottom: 5px;
      background: inherit;
    }
  }

  @media ${device.laptop} {
    .logo {
      cursor: pointer;
      margin-right: auto;
    }
    .menu {
      width: 100%;
      justify-content: end;
      ul {
        position: fixed;
        top: 0;
        right: -150%;
        width: 100%;
        min-height: 100vh;
        height: 100%;
        background: #000000f4;
        z-index: 9999;
        flex-direction: column;
        justify-content: space-around;
        padding-top: 100px;
        transition: right 0.8s ease-in-out;
        li {
          position: relative;
          color: white;
          height: 100%;
          a {
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 161.6%;
            text-decoration: none;
            color: inherit;
            display: inline-block;
          }

          &::after {
            content: "";
            display: none;
          }
          &:hover {
            &::after {
              display: none;
            }
          }
        }
      }
      ul.active {
        right: 0;
      }
    }
    .menuBtn {
      display: block;
      z-index: 9999;
    }
  }
  @media ${device.tablet} {
    .menu {
      .trailBtn {
        width: 140px;
        height: 40px;
        font-size: 15px;
      }
    }
  }
`;
