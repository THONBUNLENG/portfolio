import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import homeLogo from "../../Assets/home-main.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I&apos;m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I&apos;ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I&apos;m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Flutter, React Native, Swift, Kotlin, JavaScript, C++, C#,
                  Rust, Node.js, Laravel, Python and Java
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Mobile Applications and Web Applications, Blockchain
                  Solutions
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with{" "}
              <b className="purple">Flutter</b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>

          {/* Image Section */}
          <Col
            md={4}
            className="myAvtar"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
            >
              <img
                src={homeLogo}
                alt="avatar"
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "20px",
                  display: "block",  
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;