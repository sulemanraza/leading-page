import Image from "next/image";
import styled from "styled-components";
import MobileIcon from "../../asset/Mobile.svg";
import LineIcon from "../../asset/Line";
import ListItem from "./ListItem";
import { useState } from "react";
import Button from "../../components/Button/Button";
import GooglePlay from "../../asset/googlePlay.png";
import AppleStore from "../../asset/AppStore.png";
import { Container } from "./FeatureStyle";

const Feature = () => {
  const [Show, setShow] = useState<boolean>(false);

  return (
    <Container>
      {/* heading of feature section */}
      <div className="heading">
        <h1>App Feature</h1>
        <LineIcon />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac quam{" "}
          suspendisse amet est pharetra ipsum.
        </p>
      </div>

      {/* main content of feature section */}
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
