import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";
import PhoneMockup from "./PhoneMockup";

function ProjectCards(props) {
  const { t } = useLanguage();
  return (
    <Card className="project-card-view">
      {props.themeDemo ? (
        <div className="project-card-media">
          <PhoneMockup />
        </div>
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <div style={{ textAlign: "center" }}>
        <Button 
          variant="primary" 
          href={props.ghLink} 
          target="_blank"
          style={{
            backgroundColor: "#c770f0",
            borderColor: "#c770f0",
            color: "#fff",
          }}
        >
          <BsGithub /> &nbsp;
          {t("githubButton")}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ 
              marginLeft: "10px",
              backgroundColor: "#934cce5e",
              borderColor: "#934cce5e",
              color: "#fff",
            }}
          >
            <CgWebsite /> &nbsp;
            {t("demoButton")}
          </Button>
        )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
