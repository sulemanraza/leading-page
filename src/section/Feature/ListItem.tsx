import styled from "styled-components";
import CheckIcon from "../../asset/CheckIcon";
import { device } from "../../components/Response";

interface Props {
  Row?: boolean;
  text: string;
}

const ListItem = ({ Row, text }: Props) => {
  return (
    <Item style={{ flexDirection: `${Row ? "row-reverse" : "row"}` }}>
      <span>{text}</span>
      <CheckIcon />
    </Item>
  );
};

export default ListItem;

const Item = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 14px;
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
  }

  @media ${device.laptop} {
    flex-direction: row-reverse !important;
    align-items: start;
    justify-content: flex-start;
    margin-bottom: 30px;
  }
`;
