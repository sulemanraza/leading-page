import LineIcon from "../../asset/Line";
import Card from "./Card";
import { Container } from "./workStyle";

const Work = () => {
  return (
    <Container>
      {/* heading of work section */}
      <div className="heading">
        <h1>How it works</h1>
        <LineIcon />
      </div>

      {/* card List of work section */}
      <div className="wrapper">
        {cardData.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default Work;

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
