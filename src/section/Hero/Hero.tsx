import Image from "next/image";
import PlayBtn from "../../asset/PlayBtn";
import Navbar from "../../components/Navbar";
import GooglePlay from "../../asset/googlePlay.png";
import AppleStore from "../../asset/AppStore.png";
import MobileIcon from "../../asset/Mobile.svg";
import UserIcon from "../../asset/Usericon";
import Button from "../../components/Button/Button";
import { Container } from "./HeroStyle";

const Hero = () => {
  return (
    <Container>
      <Navbar />
      <div className="heroWrapper">
        {/* left side of hero section */}
        <div className="left">
          <div className="bgCircle"></div>
          <span>My Simple Family App</span>
          <h1>
            Get Points <br /> for Completing <br /> Your Task.
          </h1>
          <p>
            The points per task and rewards are set by the parents. Which can be
            redeemed for awards.
          </p>
          <div className="videoBtn">
            <PlayBtn /> <span>Watch Video</span>
          </div>
          <div className="appBtn">
            <div>
              <Button ImageUrl={GooglePlay} link={"/"} />
              <Button ImageUrl={AppleStore} link={"/"} />
            </div>
            <UserIcon />
          </div>
        </div>

        {/* right side of hero section */}
        <div className="right">
          <div className="mobile">
            <div className="circleMain">
              <Image src={MobileIcon} width={400} height={750} alt="mobile" />
            </div>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
