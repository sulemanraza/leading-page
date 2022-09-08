import styled from "styled-components";
import { device } from "../../components/Response";

export const Container = styled.section`
  padding: 0 6%;
  width: 100%;
  margin-bottom: 130px;
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
    margin-top: 450px;
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media ${device.tablet} {
    padding: 0 4%;
    margin-top: 400px;
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media ${device.mobileLg} {
    padding: 0 15px;
    margin-top: 350px;
    .wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
