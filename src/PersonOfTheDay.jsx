import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

function PersonOfTheDay({ name, info, portrait, index }) {
  const { t } = useTranslation();
  let pathname;
  switch (index) {
    case 0:
      pathname = "project123/James";
      break;
    case 1:
      pathname = "project123/Cassidy";
      break;
    case 2:
      pathname = "project123/Dillinger";
      break;
    case 3:
      pathname = "project123/Gillis";
      break;
    case 4:
      pathname = "project123/Kid";
      break;
    default:
      pathname = "project123/home";
  }
  return (
    <>
      <div className="card_container container-fluid d-flex align-items-center justify-content-center max-width-100 ">
        <Card className=" daily_card ">
          <Card.Body className="d-flex flex-column flex-lg-row flex-md-row align-items-center align-items-lg-start align-items-md-start text-center">
            <Col lg={4} md={4} sm={10} xs={10} className="mb-3 mb-lg-0 mb-md-0">
              <Card.Img
                variant="top"
                src={portrait}
                alt="burglar's portrait"
                className="img-fluid max-width-100 mx-auto text-center"
              />
            </Col>

            <Col lg={8} md={8}>
              <Card.Title className="caption" id="daily_name">
                {name}
              </Card.Title>
              <Card.Text className="description ">{info}</Card.Text>
              <div className="text-center">
                <Button variant="primary" className="read_more" href={pathname}>
                  {t("read_button.read_more")}
                </Button>
              </div>
            </Col>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default PersonOfTheDay;
