import Image from "next/image";
import profile from "../../images/profile.jpg";
import "../styles/homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="name_container">
        <div className="text">Hello.</div>
        <div className="name">I am Sameer Chikshe</div>
        <div className="role">Front-end Developer</div>
      </div>
      <div className="image_container">
        <Image
          className="image"
          src={profile.src}
          alt="profile_pic"
          width={100}
          height={100}
          layout="responsive"
        />
        <div className="rotating_container"></div>
      </div>
    </div>
  );
};

export default Homepage;
