import image1 from "../../images/programming.svg";
import image2 from "../../images/projects.svg";
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
  primary: false,
  darkText: true,
};

export const homeObjTwo = {
  id: "projects",
  to: "/projects",
  lightBg: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "work",
  heading: "Projects",
  desc: "Here are some of my personal projects",
  buttonLabel: "Projects",
  imgStart: false,
  imgSrc: image2,
  alt: "Projects",
  dark: true,
  primary: false,
  darkText: true,
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
  primary: false,
  darkText: true,
};
