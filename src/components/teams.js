import Container from "react-bootstrap/Container";

import Carousel from "react-bootstrap/Carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assets/images/hamkor1.jpg";
import img2 from "../assets/images/hamkor2.jpg";
import img3 from "../assets/images/hamkor3.jpg";
import img4 from "../assets/images/hamkor4.jpg";
import img5 from "../assets/images/5.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";

// const teamsData = [
//   {
//     id: 1,
//     image: require("../assets/images/hamkor1.jpg"),
//     fbLink: "https://www.facebook.com",
//     twitterLink: "https://www.twitter.com",
//     linkedinLink: "https://www.linkedin.com",
//     name: "Sepkgnnj",
//     designation: "",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
//   },
//   {
//     id: 2,
//     image: require("../assets/images/hamkor2.jpg"),
//     fbLink: "https://www.facebook.com",
//     twitterLink: "https://www.twitter.com",
//     linkedinLink: "https://www.linkedin.com",
//     name: "DLuyan Jesio",
//     designation: "",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
//   },
//   {
//     id: 3,
//     image: require("../assets/images/hamkor3.jpg"),
//     fbLink: "https://www.facebook.com",
//     twitterLink: "https://www.twitter.com",
//     linkedinLink: "https://www.linkedin.com",
//     name: "Okamato",
//     designation: "",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
//   },
//   {
//     id: 4,
//     image: require("../assets/images/hamkor4.jpg"),
//     fbLink: "https://www.facebook.com",
//     twitterLink: "https://www.twitter.com",
//     linkedinLink: "https://www.linkedin.com",
//     name: "Fukusker",
//     designation: "",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
//   },
// ];

function AppTeams() {
  return (
    <section id="teams" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2> Our partners</h2>
          <div className="subtitle">learn more our partners</div>
        </div>
        {/* Carousel open */}
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img1} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img3} />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img5} />
              </Col>
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img4} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img8} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img7} />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col sm={3}>
                <Image src={img2} />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        {/* Carousel clous       */}
      </Container>
    </section>
  );
}

export default AppTeams;
