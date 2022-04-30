import styles from "./main.module.css";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Main() {
  const socialMedia = [
    {
      name: "Github",
      link: "https://github.com/awaludin-dev",
      time: "1200",
      icon: faGithub,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/aww_udin",
      time: "1400",
      icon: faInstagram,
    },
    {
      name: "Facebook",
      link: "https://facebook.com/awaludin.ubadah",
      time: "1600",
      icon: faFacebook,
    },
    {
      name: "Tiktok",
      link: "https://www.tiktok.com/@aww.udin",
      time: "1800",
      icon: faTiktok,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCsP7YBGy5bL0zeSQIENXB3Q",
      time: "2000",
      icon: faYoutube,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/awaludin-nasir-ubadah-7b280a1b",
      time: "2200",
      icon: faLinkedin,
    },
  ];

  return (
    <div className={styles.mainArea}>
      <div className={styles.logoArea}>
        {socialMedia.map((item, key) => {
          return (
            <a href={item.link} target="_blank" rel="noreferrer" key={key}>
              <FontAwesomeIcon
                icon={item.icon}
                className={styles.logo}
                data-aos="flip-right"
                data-aos-duration={item.time}
              />
            </a>
          );
        })}
      </div>
      <a
        href="https://drive.google.com/file/d/1nFzdFHaPvs_DeztjvtZ8Czbz2jjjQWVm/view?usp=sharing"
        className={styles.itemChoose}
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        Curriculum Vitae
      </a>
      <a
        href="https://drive.google.com/file/d/1xhu0BzOuw8uoMLwUe8wXgE_l2u3Rx8uz/view?usp=sharing"
        className={styles.itemChoose}
        target="_blank"
        rel="noreferrer"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        Portofolio
      </a>
    </div>
  );
}

export default Main;
