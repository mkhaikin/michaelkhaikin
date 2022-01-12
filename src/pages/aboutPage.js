import styled from "styled-components";
import Header from "../components/Header";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div className="container">
      <Header title={"About"} />
      <About />
    </div>
  );
};

const Container = styled.div`
  padding: 200px 30px;
`;

export default AboutPage;
