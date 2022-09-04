import Image from "next/image";
import styled from "styled-components";
import MobileIcon from "../../asset/Mobile.svg";
import LineIcon from "../../asset/Line";
import ListItem from "./ListItem";
import { device } from "../../components/Response";
import ArrowRight from "../../asset/ArrowRight";
import { useState } from "react";
import Button from "../../components/Button/Button";
import GooglePlay from "../../asset/googlePlay.png";
import AppleStore from "../../asset/AppStore.png";

const Feature = () => {
  const [Show, setShow] = useState<boolean>(false);

  return (
    <Container>
      <div className="heading">
        <h1>App Feature</h1>
        <LineIcon />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam{" "}
          suspendisse amet est pharetra ipsum.
        </p>
      </div>

      <div className="wrapper">
        <div className="left">
          <ListItem text="Prevent Arguments" />
          <ListItem text="Save time" />
          <ListItem text="Provide family Structure" />
          <ListItem text="Gamily Work" />
          <ListItem text="Cleaner House" />
        </div>
        <div className="center">
          <div className="circle">
            <Image src={MobileIcon} width={1500} height={3100} alt="mobile" />
          </div>
          <div className="appButton">
            <Button ImageUrl={GooglePlay} link={"/"} />
            <Button ImageUrl={AppleStore} link={"/"} />
          </div>
        </div>
        <div className={Show ? "right " : "right hidden"}>
          <ListItem Row={true} text="Less Stress" />
          <ListItem Row={true} text="Improve Family Communication" />
          <ListItem Row={true} text="Improve kids responsibility skills" />
          <ListItem Row={true} text="Improve team feeling of family" />
          <ListItem Row={true} text="Helps reduce kids gaming time" />
        </div>
        <button
          className="seeMore"
          onClick={() => (Show ? setShow(false) : setShow(true))}
        >
          <span>See More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            fill="none"
            viewBox="0 0 15 9"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
              d="M1.261 1.198L7.17 7.081l5.883-5.907"
            ></path>
          </svg>
        </button>
      </div>
    </Container>
  );
};

export default Feature;

const Container = styled.section`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding: 0 6%;
  .heading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 110px;
    flex-direction: column;
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 115.6%;
    }
    p {
      display: inline-block;
      max-width: 600px;
      text-align: center;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      color: #2a2a2a;
    }
  }

  .wrapper {
    display: grid;
    margin-top: 84px;
    grid-template-columns: repeat(3, 1fr);
    .left,
    .right {
      padding-right: 42px;
      height: 514px;
      display: flex;
      align-items: end;
      flex-direction: column;
      justify-content: space-around;
    }
    .right {
      padding-left: 42px;
      padding-right: 0;
      align-items: flex-start;
    }
    .center {
      width: 430px;
      display: grid;
      place-items: center;
      .circle {
        position: absolute;
        width: 428px;
        height: 428px;
        border-radius: 100%;
        background: #9ed9ee;
        z-index: -1;
        display: grid;
        place-items: center;
        img {
          margin-top: 84px;
        }
      }
    }
    .appButton {
      display: none;
    }
  }
  .seeMore {
    display: none;
  }
  @media ${device.laptop} {
    padding: 0 5%;
    height: 100%;
    .wrapper {
      grid-template-columns: repeat(1, 1fr);

      .left,
      .right {
        padding: 0;
        height: fit-content;
        align-items: baseline;
        justify-content: center;
        margin: 0;
      }
      .right {
        transition: all 0.5s ease-in-out;
      }
      .hidden {
        display: none;
      }
      .center {
        width: 100%;
        margin-top: 330px;
        order: 3;
        position: relative;
      }
      .appButton {
        position: absolute;
        bottom: -330px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
      }

      .seeMore {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 156px;
        height: 46px;
        color: white;
        background: #42a4ff;
        border-radius: 29px;
        border: none;
        gap: 10px;
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 161.6%;
          color: #ffffff;
        }
      }
    }
  }
  @media ${device.tablet} {
    padding: 0 4%;
    .heading {
      h1 {
        font-size: 40px;
        line-height: 115.6%;
      }
      p {
        font-size: 16px;
        line-height: 27px;
      }
    }
  }
  @media ${device.mobileLg} {
    padding: 0 15px;
    .heading {
      h1 {
        font-size: 30px;
        line-height: 115.6%;
      }
      p {
        font-size: 14px;
        line-height: 27px;
      }
    }
    .wrapper {
      .center {
        margin-top: 300px;
        .circle {
          width: 328px;
          height: 328px;
          transition: all 0.8s ease-in-out;
        }
      }
      .appButton {
        bottom: -300px;
      }
    }
  }
  @media ${device.mobileS} {
    .heading {
      h1 {
        font-size: 30px;
        line-height: 115.6%;
      }
      p {
        font-size: 13px;
        line-height: 27px;
      }
    }
    .wrapper {
      .center {
        .circle {
          width: 300px;
          height: 300px;
        }
      }
      .appButton {
        bottom: -230px;
      }
    }
  }
`;
