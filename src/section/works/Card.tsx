import Link from "next/link";
import styled from "styled-components";
import ArrowRight from "../../asset/ArrowRight";
import { device } from "../../components/Response";

interface Props {
  item: {};
}
const Card = ({ item }: any) => {
  return (
    <Container>
      <div className="num">
        <span>{item.id}</span>
      </div>
      <h2 className="title">{item.title}</h2>
      <div className="cardBody">
        <p>{item.cardBody}</p>
        <Link href={item.Link}>
          <a>
            <div>
              <span>Learn More</span>
              <ArrowRight />
            </div>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  height: 304px;
  text-align: center;
  background: #ffffff;
  border-radius: 9px;
  padding: 11px;
  border: 1px solid #eaeaea;

  &:hover {
    box-shadow: 0px 22px 35px 7px rgba(0, 0, 0, 0.06);
  }
  &:nth-child(2) {
    box-shadow: 0px 22px 35px 7px rgba(0, 0, 0, 0.06);
  }
  .num {
    margin: 31px auto 5px auto;
    width: 49px;
    height: 49px;
    border-radius: 100%;
    background: #fdf1e5;
    display: grid;
    place-items: center;
  }
  .title {
    height: 36px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
  }
  .cardBody {
    margin-top: 11px;
    p {
      height: 89px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      color: #2a2a2a;
    }

    a {
      text-decoration: none;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;

        span {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          color: #ff725e;
        }
      }
    }
  }
`;
