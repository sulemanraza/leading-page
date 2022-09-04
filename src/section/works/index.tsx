import React from "react";
import styled from "styled-components";
import LineIcon from "../../asset/Line";
import { device } from "../../components/Response";
import Card from "./Card";

const Work = () => {
  return (
    <Container>
      <div className="heading">
        <h1>How it works</h1>
        <LineIcon />
      </div>

      <div className="wrapper">
        {cardData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Work;

const Container = styled.section`
  min-height: 100vh;
  height: 100%;
  padding: 0 6%;
  width: 100%;
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
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
    margin-top: 41px;
  }
  @media ${device.laptop} {
    padding: 0 5%;
    margin-top: 500px;
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media ${device.tablet} {
    padding: 0 4%;
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media ${device.mobileLg} {
    padding: 0 15px;
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const cardData = [
  {
    id: 1,
    title: "Downland",
    cardBody: "First you have to get the app with download",
    Link: "/",
  },
  {
    id: 2,
    title: "Create Account",
    cardBody: "Create you own account and make task easily.",
    Link: "/",
  },
  {
    id: 3,
    title: "Invite Others",
    cardBody: "Invite your friends and family to use this app.",
    Link: "/",
  },
  {
    id: 4,
    title: "Start Structuring",
    cardBody: "Start structuring and get you daily points.",
    Link: "/",
  },
];
