"use client";
import { usePathname, useRouter } from "next/navigation";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.svg";
import "../styles/footer.scss";
const Footer = () => {
  const router = useRouter();

  const pathName = usePathname();

  const slug = pathName.split("/");

  const handleRoute = (page: string) => {
    router.push(page);
  };

  return (
    <div className="footer">
      <div className="content">
        <span
          className={`options ${slug[1] == "" ? "active" : ""}`}
          onClick={() => handleRoute("/")}
        >
          Cover
        </span>
        <span>.</span>
        <span
          className={`options ${slug[1] == "about-me" ? "active" : ""}`}
          onClick={() => handleRoute("about-me")}
        >
          About Me
        </span>
        <span>.</span>
        <span
          className={`options ${slug[1] == "work" ? "active" : ""}`}
          onClick={() => handleRoute("work")}
        >
          Work
        </span>
        <span>.</span>
        <span
          className={`options ${slug[1] == "contact-me" ? "active" : ""}`}
          onClick={() => handleRoute("contact-me")}
        >
          Contact Me
        </span>
      </div>
      <div className="social">
        <a
          href="https://www.linkedin.com/in/sameer-chikshe-913127178/"
          target="_blank"
        >
          <img
            className="logo"
            src={linkedin.src}
            alt="linkedIn"
            title="linkedIn"
          />
        </a>
        <a href="https://github.com/SameerChikshe" target="_blank">
          <img className="logo" src={github.src} alt="github" title="github" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
