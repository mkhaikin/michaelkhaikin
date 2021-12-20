import image1 from "../../images/programming.svg";
import image2 from "../../images/dev.svg";
import image3 from "../../images/contact.svg";

export const homeObjOne = {
  id: "about",
  to: "/about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Bio",
  heading: "About Me",
  desc: "I'm a sound engineer that turn develeoper",
  buttonLabel: "About",
  imgStart: true,
  imgSrc: image1,
  alt: "About me",
  dark: false,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "projects",
  to: "/projects",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "work",
  heading: "Projects",
  desc: "Here are some of my personal projects",
  buttonLabel: "Projects",
  imgStart: false,
  imgSrc: image2,
  alt: "Projects",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "contact",
  to: "/contact",
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: "Connect",
  heading: "Contact Me",
  desc: "Let's get in touch",
  buttonLabel: "Contact",
  imgStart: true,
  imgSrc: image3,
  alt: "Contact me",
  dark: true,
  primary: true,
  darkText: true,
};
